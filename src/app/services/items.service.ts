import { Injectable } from '@angular/core';
import { Item } from '../shared/item';
import { ITEMS } from '../shared/mock-items';


@Injectable()
export class ItemsService {

  constructor() { }
  getItems():Promise<Item[]>{
    //TODO : This is temp for the MOCK data
    return Promise.resolve(ITEMS);
  }
}
