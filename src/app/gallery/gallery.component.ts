import { Component } from '@angular/core';
import { RecommendedproductsComponent } from '../recommendedproducts/recommendedproducts.component';
export interface Iproducts{
  name:string,
  category:string,
  salary:number,
  onsale:boolean,
  img:string
}
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendedproductsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
list:Iproducts[]=[
  {name:'Dell',category:'laptop',salary:10000,onsale:true,img:'assets/images/Dell-laptop.jpg'},
  {name:'Gallaxy',category:'Ipad',salary:15000,onsale:true,img:'assets/images/ipad-gallaxy.webp'},
  {name:'Lenovo',category:'Android',salary:20000,onsale:true,img:'assets/images/mobile-lenovo.jpg'},
  {name:'Samsung',category:'tablet',salary:20000,onsale:false,img:'assets/images/tablet-samsung.webp'},
  {name:'Toshipa',category:'Tv',salary:15000,onsale:true,img:'assets/images/tv-toshipa.webp'},
  {name:'Apple',category:'Iphone',salary:30000,onsale:false,img:'assets/images/iphone-apple.jpeg'},
]}



