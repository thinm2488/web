import { Component, OnInit } from '@angular/core';
		import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
    import { Observable } from 'rxjs'
    import  {Item} from '../../../model/Item'
		// export interface Item { id: string; name: string; }
    import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-content',
  // templateUrl: './content.component.html',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 email:String
  private itemsCollection: AngularFirestoreCollection<Item>;
  items:Item[];
  constructor(private readonly afs: AngularFirestore, private cookies: CookieService) {
  this.itemsCollection = afs.collection<Item>('Item');
  // .valueChanges() is simple. It just returns the 
  // JSON data without metadata. If you need the 
  // doc.id() in the value you must persist it your self
  // or use .snapshotChanges() instead. 
   this.itemsCollection.snapshotChanges().subscribe(data=>{
    this.items = Object.assign(data)
  });
  }
  ngOnInit() {
    this.email=this.cookies.get("email")
    
  }

  insert( ){
    let item = new Item();
    item.name="AAAAAAAAA";
    item.id="2162488"
    const id =this.afs.createId()

    this.itemsCollection.doc(id).set(Object.assign({},item))
  }
}
