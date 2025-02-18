import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopNavbarContent1Component} from './components/top-navbar-content1/top-navbar-content1.component';
import {ComboCardComponent} from './components/combo-card/combo-card.component';
import {
  TopBannerImagesContent2Component
} from './components/top-banner-images-content2/top-banner-images-content2.component';
import {NavbarContent3Component} from './components/navbar-content3/navbar-content3.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopNavbarContent1Component, ComboCardComponent, TopBannerImagesContent2Component, NavbarContent3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'web-clone-angular';

  ComboS= [
    {
      image:"https://product.hstatic.net/200000043306/product/com_suon_canh_nuoc_6952d9bdf5da4ff9ab796f0e088d913a_grande.png",
      title:"COMBO SƯỜN NƯỚNG THAN HOA",
      description:"Combo Sườn Nướng Than Hoa",
      price: 74000,
      discount: 62000
    },
    {
      image:"https://product.hstatic.net/200000043306/product/com_ga_nuong_canh_nuoc_916a42794acc44b1aa1b06a29ab6be78_grande.png",
      title:"Combo Gà Quay Than Hoa Canh Nước",
      description:"Combo Gà Quay Than Hoa Canh Nước",
      price: 81000,
      discount: 69000
    },
    {
      image:"https://product.hstatic.net/200000043306/product/com_ba_roi_canh_nuoc_1b172c15d9434807b5ba1fa3cd9b8068_grande.png",
      title:"COMBO BA RỌI NGŨ VỊ CANH NƯỚC",
      description:"COMBO BA RỌI NGŨ VỊ CANH NƯỚC",
      price: 84000,
      discount: 72000
    },
    {
      image:"https://product.hstatic.net/200000043306/product/com_suon_mem_canh_nuoc_d7a98dc9d1bd424e914d9dd5177dfafd_grande.png",
      title:"COMBO SƯỜN MỀM PHÚC LỘC THỌ CANH NƯỚC",
      description:"COMBO SƯỜN MỀM PHÚC LỘC THỌ CANH NƯỚC",
      price: 91000,
      discount: 79000
    },
    {
      image:"https://product.hstatic.net/200000043306/product/com_suon_mem_canh_nuoc_d7a98dc9d1bd424e914d9dd5177dfafd_grande.png",
      title:"COMBO SƯỜN NON QUAY MẬT ONG CANH NƯỚC",
      description:"COMBO SƯỜN NON QUAY MẬT ONG CANH NƯỚC",
      price: 101000,
      discount: 89000
    },
  ]
}
