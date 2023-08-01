import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private Afs:AngularFirestore) { }


  loadData(){
    return this.Afs.collection('categories').snapshotChanges().pipe(
       map( action =>{
         return action.map(a=>{
           let data=a.payload.doc.data();
           const id=a.payload.doc.id;
           return {id, data};
         })
       })
     )
   }
  
   
  
  








}


