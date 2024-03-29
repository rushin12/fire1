import { Component, OnInit } from '@angular/core';

import {ItemService} from '../shared/item.service';
import {Item} from '../shared/item';
// import {} from '';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {


  public items : FirebaseListObservable<Item[]>;
  constructor( private itemSvc : ItemService) { }

  ngOnInit() {

    this.items = this.itemSvc.getItemsList({limitToLast : 5})
  }

  // deleteItems(){

  //   this.itemSvc.deleteAll()
  // }

}
