import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.page.html',
  styleUrls: ['./edit-comp.page.scss'],
})
export class EditCompPage implements OnInit {

post = {} as Post;
id: any;

  constructor(
  private actRoute: ActivatedRoute,
  private loadingCtrl: LoadingController,
  private firestore: AngularFirestore,
  private toastCtrl: ToastController,
  private navCtrl: NavController) { this.id = this.actRoute.snapshot.paramMap.get("id"); }

  ngOnInit() { this.getPostById(this.id); }

  async getPostById(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
 
  this.firestore.doc("contact/" + id)
  .valueChanges()
  .subscribe(data => {
    this.post.title = data["title"];
    this.post.location = data["location"];
    this.post.level = data["level"];
    this.post.details = data["details"];
  });
  //dismiss loader
  (await loader).dismiss();
  }
 
  async updatePost(post: Post){
    if(this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
      message: "Please wait..."
      });
      (await loader).present();
  
      try{
       
        await this.firestore.doc("contact/" + this.id).update(post);
      } catch(e){
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
  
      //redirect to view post page
      this.navCtrl.navigateRoot("view-post");
      }
  }
 
  formValidation(){
    if(!this.post.title){
      this.showToast("Enter Title");
      return false;
    }
 
    if(!this.post.location){
      this.showToast("Enter Location");
      return false;
    }
 
    if(!this.post.level){
      this.showToast("Enter Level");
      return false;
    }
 
    if(!this.post.details){
      this.showToast("Enter Details");
      return false;
    }
 
    return true;
  }
 
  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }
}
