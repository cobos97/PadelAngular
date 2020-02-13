import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MensajeInterface } from '../modelo/mensaje';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  mensajesCollection: AngularFirestoreCollection<MensajeInterface>;
  mensajes: Observable<MensajeInterface[]>;
  mensajeDoc: AngularFirestoreDocument<MensajeInterface>;

  constructor(public afs: AngularFirestore) {
    this.mensajesCollection = afs.collection<MensajeInterface>('mensajes', ref => ref.orderBy('fecha', 'desc'));
    this.mensajes = this.mensajesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MensajeInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  addMensaje(mensaje: MensajeInterface) {
    console.log("New mensaje");
    this.mensajesCollection.add(mensaje);
  }

  getMensajes() {
    return this.mensajes;
  }

}
