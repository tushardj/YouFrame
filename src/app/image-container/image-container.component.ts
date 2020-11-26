import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent implements OnInit {
  imageList : any[]
  rowIndexArray : any[]
  selectedImage: any
  isImageSelectToShow: boolean = false
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getAllImage().snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => {
          return item.payload.val()
        })
        this.imageList.reverse()
        this.rowIndexArray = Array.from(Array(Math.ceil(this.imageList.length /3)).keys())
        console.log(this.imageList)
      }
    )
  }

  passSelectedImage(img:any){
    this.isImageSelectToShow = true
    this.selectedImage = img
  }

}
