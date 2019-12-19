import { Injectable } from '@angular/core';

import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabase} from '@angular/fire/database';

import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';
// import {}

import { Item } from './item';




@Injectable({
  providedIn: 'root'
})
export class ItemService {


  private basePath: string = '/items';

  items: Observable<Item[]> = null;
  item: Observable<Item[]> = null;

  constructor(private af: AngularFireModule,
    private db: AngularFireDatabase) { }

    getItemsList(query={}):Observable<Item[]>{

      this.items = this.db.list(this.basePath,{


        query : query
      });

      return this.items
    }

    getItem(key:string) : Observable<Item>{

      const itemPath = '${this.basePath}/${key}';
      this.item = this.db.object(itemPath)
      return this.item
    }

    createItem(item:Item) : void{

        this.items.push(item)

    }
}
