import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: AngularFireList<any>

  constructor(private storage:AngularFireStorage, private firebase: AngularFireDatabase) { }

  getAllImage(){
    this.imageDetailList = this.firebase.list("imageDetails")
    return this.imageDetailList
  }
  insertImageDetailsToDb(imageDetails:any){
    this.imageDetailList.push(imageDetails)
  }

  upload(filepath, imageToupload){
    return this.storage.upload(filepath, imageToupload)
  }

}
