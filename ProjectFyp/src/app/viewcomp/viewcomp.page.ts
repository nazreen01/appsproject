import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-viewcomp',
  templateUrl: './viewcomp.page.html',
  styleUrls: ['./viewcomp.page.scss'],
})
export class ViewcompPage implements OnInit {

posts: any;

  constructor(
  private loadingCtrl: LoadingController,
  private toastCtrl: ToastController,
  private firestore: AngularFirestore
) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.getPosts();
  }

  async getPosts(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("contact")
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()["title"],
          location: e.payload.doc.data()["location"],
          level: e.payload.doc.data()["level"],
          details: e.payload.doc.data()["details"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }

  async deletePost(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();

  await this.firestore.doc("contact/" + id).delete();

  //dismiss loader
  (await loader).dismiss();
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
}
