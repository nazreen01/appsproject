import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../models/post.mode';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.page.html',
  styleUrls: ['./newcomp.page.scss'],
})
export class NewcompPage implements OnInit {

	post = {} as Post;

  constructor(
  private toastCtrl: ToastController,
  private loadingCtrl: LoadingController,
  private navCtrl: NavController,
  private firestore: AngularFirestore

  ) {}

  ngOnInit() {}

   async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("contact").add(post);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("index");
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
      this.showToast("Enter Complaint Information");
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
  }}

