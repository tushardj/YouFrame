import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { from } from 'rxjs';
import { ImageService } from './image.service';
import { finalize } from 'rxjs/operators'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YouFrame';

  selectedImage:any
  imageToUpload :any

  constructor(private storage: AngularFireStorage, private imageService:ImageService){}

  ngOnInit() {
    this.imageService.getAllImage()
  }

  uploadFile(event){
    if(event.target.files && event.target.files[0] ){
      const reader = new FileReader()
      reader.onload= (e:any) => this.selectedImage = e.target.result
      reader.readAsDataURL(event.target.files[0])
      this.imageToUpload = event.target.files[0]

      // upload file to firebase
      var filePath = `${this.imageToUpload.name}_${new Date().getTime()}`
      var fileName =  filePath.substr(0, filePath.indexOf("."))
      const fileref = this.storage.ref(filePath);
      this.storage.upload(filePath, this.imageToUpload).snapshotChanges().pipe(
        finalize(()=>{
          // Gets Downlodable url from firebase and upload to realtime database
          fileref.getDownloadURL().subscribe((url)=>{
            this.imageService.insertImageDetailsToDb({ "name":fileName,"imageUrl": url})
          })
        })
      ).subscribe()
    }
  }
}
