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
  mensajesCollectionMoriles: AngularFirestoreCollection<MensajeInterface>;
  mensajesMoriles: Observable<MensajeInterface[]>;
  mensajesCollectionLucena: AngularFirestoreCollection<MensajeInterface>;
  mensajesLucena: Observable<MensajeInterface[]>;
  mensajesCollectionMonturque: AngularFirestoreCollection<MensajeInterface>;
  mensajesMonturque: Observable<MensajeInterface[]>;
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

    this.mensajesCollectionMoriles = afs.collection<MensajeInterface>('mensajes', ref => ref.where('lugar', '==', 'Moriles'));
    this.mensajesMoriles = this.mensajesCollectionMoriles.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MensajeInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )

    this.mensajesCollectionLucena = afs.collection<MensajeInterface>('mensajes', ref => ref.where('lugar', '==', 'Lucena'));
    this.mensajesLucena = this.mensajesCollectionLucena.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as MensajeInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )

    this.mensajesCollectionMonturque = afs.collection<MensajeInterface>('mensajes', ref => ref.where('lugar', '==', 'Monturque'));
    this.mensajesMonturque = this.mensajesCollectionMonturque.snapshotChanges().pipe(
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

  delMensaje(id){
    console.log("Borrando...");
    this.mensajeDoc = this.afs.doc(`mensajes/`+id);
    this.mensajeDoc.delete();
  }

  getMensajes() {
    console.log('getmensajes');
    return this.mensajes;
  }

  getMensajesMoriles(){
    console.log('getmensajesmoriles');
    return this.mensajesMoriles;
  }

  getMensajesLucena(){
    console.log('getmensajeslucena');
    return this.mensajesLucena;
  }

  getMensajesMonturque(){
    console.log('getmensajeslucena');
    return this.mensajesMonturque;
  }

}
