import { Component, Input, Inject, ViewChild, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../shared/item';
import { Avatar } from '../../../shared/avatar';

@Component({
  moduleId: module.id,
  selector: 'shop',
  templateUrl: 'shop.html',
  styleUrls: ['shop.css'],
})
export class Shop implements Input {
  dialogRef: MdDialogRef<ShopDialog>;
  lastCloseResult: string;
  actionsAlignment: string;
  @Input() avatar: Avatar;

  config: MdDialogConfig = {
    disableClose: false,
    width: '50%',
    height: '50%',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      avatar: undefined
    }
  };

  constructor(public dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
    // Possible useful example for the open and closeAll events.
    // Adding a class to the body if a dialog opens and
    // removing it after all open dialogs are closed

    dialog.afterOpen.subscribe((ref: MdDialogRef<any>) => {
      if (!doc.body.classList.contains('no-scroll')) {
        doc.body.classList.add('no-scroll');
      }
    });
    dialog.afterAllClosed.subscribe(() => {
      doc.body.classList.remove('no-scroll');
    });
  }

  openShop() {
    this.config.data.avatar = this.avatar;
    this.dialogRef = this.dialog.open(ShopDialog, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }
}




@Component({
  selector: 'shop-dialog',
  templateUrl: 'shop-dialog.html',
  providers: [ItemsService]

})
export class ShopDialog implements OnInit {
  items: Item[] = [];
  constructor(
    public dialogRef: MdDialogRef<ShopDialog>,
    @Inject(MD_DIALOG_DATA) public data: any,
    private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems()
      .subscribe((items) => this.items = items
      , (err) => console.log("Error:", err));
  }

  buy(item: Item) {
    //need to use the item's price instead , ATM assuming all are 100
    if (this.data.avatar.money < item.price) {
      console.log("Not enough money");
      return;
    }

    if (this.data.avatar.inventory.find(
      (other: Item) => item.id == other.id)) {
      console.log("You already have this item");
      return;
    }
    console.log(`Bought ${item.name} Price: ${item.price}`);
    this.data.avatar.money -= item.price;
    this.data.avatar.inventory.push(item);


  }

  hasItem(item: Item) {
    if (this.data.avatar.inventory.find(
      (other: Item) => item.id == other.id)) {
      return true;
    }
    return false;
  }

  sell(item:Item){
    console.log(`Sold ${item.name} Price: ${item.price}`);
    this.data.avatar.money += item.price;
    this.data.avatar.inventory.splice(this.data.avatar.inventory.indexOf(item),1);
  }
  ///this.dialogRef.updateSize(w,h), this.dialogRef.updatePosition(top,left,right,bottom)
}
