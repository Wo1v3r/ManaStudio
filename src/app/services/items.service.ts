import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
// import { ITEMS } from '../shared/mock-items';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

//Before FireBase
// @Injectable()
// export class ItemsService {

//   constructor() { }
//   getItems():Promise<Item[]>{
//     //TODO : This is temp for the MOCK data
//     return Promise.resolve(ITEMS);
//   }
// }

@Injectable()
export class ItemsService {
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire ) {
    this.items = af.database.list("/items");
   }

  handleError(error:any):Promise<any>{
    console.error('An error occured',error);
    return Promise.reject(error.message||error);
  }
  
  getItems():FirebaseListObservable<any>{
    return this.items;
  }
}

