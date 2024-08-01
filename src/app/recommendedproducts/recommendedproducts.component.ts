import { Component } from '@angular/core';
import { Iproducts } from '../gallery/gallery.component';

@Component({
  selector: 'app-recommendedproducts',
  standalone: true,
  imports: [],
  templateUrl: './recommendedproducts.component.html',
  styleUrl: './recommendedproducts.component.css'
})
export class RecommendedproductsComponent {
   product:Iproducts[]=[
    {name:'samsung',category:'TV',salary:30000,onsale:true,img:'assets/images/samsung-tv.avif'},
    {name:'Appo',category:'Mobile',salary:15000,onsale:false,img:'assets/images/71aqgy8pqfl._sl1500__lzzfdfkobovgmqfv_800x.webp'},
    {name:'Huawei',category:'Smartwatch',salary:10000,onsale:true,img:'assets/images/huawei-smartwatch.jpeg'},
    
   ]
}
