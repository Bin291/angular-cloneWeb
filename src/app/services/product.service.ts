import { Injectable } from '@angular/core';
import { comboModel } from '../models/combos';
import { MainDish } from '../models/mainDish';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ComboS: comboModel[] = [
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/com_suon_canh_nuoc_6952d9bdf5da4ff9ab796f0e088d913a_grande.png',
      // title: 'COMBO SƯỜN NƯỚNG THAN HOA',
      // price: 74000,
      mainDish: {
        image:
          'https://product.hstatic.net/200000043306/product/com_suon_canh_nuoc_6952d9bdf5da4ff9ab796f0e088d913a_grande.png',
        title: 'COMBO SƯỜN NƯỚNG THAN HOA',
        price: 74000,
        id: 0,
      },
      discount: 62000,
      id: 0,
      decription: 'Cơm Sườn Phúc Lộc Thọ, Canh Rong Biển Thịt Bằm, coca',
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/com_ga_nuong_canh_nuoc_916a42794acc44b1aa1b06a29ab6be78_grande.png',
      // title: 'Combo Gà Quay Than Hoa Canh Nước',
      // price: 81000,
      mainDish: {
        image:
          'https://product.hstatic.net/200000043306/product/com_ga_nuong_canh_nuoc_916a42794acc44b1aa1b06a29ab6be78_grande.png',
        title: 'Combo Gà Quay Than Hoa Canh Nước',
        price: 81000,
        id: 1,
      },
      discount: 69000,
      id: 1,
      decription: 'Cơm Gà Nướng Than Hoa, Canh Rong Biển Thịt Bằm,Coca',
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/com_ba_roi_canh_nuoc_1b172c15d9434807b5ba1fa3cd9b8068_grande.png',
      // title: 'COMBO BA RỌI NGŨ VỊ CANH NƯỚC',
      // price: 84000,
      mainDish: {
        image:
          'https://product.hstatic.net/200000043306/product/com_ba_roi_canh_nuoc_1b172c15d9434807b5ba1fa3cd9b8068_grande.png',
        title: 'COMBO BA RỌI NGŨ VỊ CANH NƯỚC',
        price: 84000,
        id: 2,
      },
      discount: 72000,
      id: 2,
      decription: 'Cơm Ba Rọi Ngũ Vị, Canh Rong Biển Thịt Bằm, coca',
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/com_suon_mem_canh_nuoc_d7a98dc9d1bd424e914d9dd5177dfafd_grande.png',
      // title: 'COMBO SƯỜN MỀM PHÚC LỘC THỌ CANH NƯỚC',
      //
      // price: 91000,
      mainDish: {
        image:
          'https://product.hstatic.net/200000043306/product/com_suon_mem_canh_nuoc_d7a98dc9d1bd424e914d9dd5177dfafd_grande.png',
        title: 'COMBO SƯỜN MỀM PHÚC LỘC THỌ CANH NƯỚC',

        price: 91000,
        id: 3,
      },
      discount: 79000,
      id: 3,
      decription: 'Cơm Sườn Mềm Đặc Biệt,Canh Rong Biển Thịt Bằm, coca',
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/com_suon_mem_canh_nuoc_d7a98dc9d1bd424e914d9dd5177dfafd_grande.png',
      // title: 'COMBO SƯỜN NON QUAY MẬT ONG CANH NƯỚC',
      //
      // price: 101000,
      mainDish: {
        image:
          'https://product.hstatic.net/200000043306/product/com_suon_mem_canh_nuoc_d7a98dc9d1bd424e914d9dd5177dfafd_grande.png',
        title: 'COMBO SƯỜN NON QUAY MẬT ONG CANH NƯỚC',

        price: 101000,
        id: 4,
      },
      discount: 89000,
      id: 4,
      decription: 'Cơm Sườn Que Ngũ Vị, Canh Rong Biển Thịt Bằm, coca',
    },
  ];
  mainDish: MainDish[] = [
    {
      image:
        'https://product.hstatic.net/200000043306/product/com_suon_canh_nuoc_6952d9bdf5da4ff9ab796f0e088d913a_grande.png',
      title: 'Cơm Sườn Nướng Than Hoa',

      price: 42000,
      id: 5,
    },
    {
      image:
        'https://product.hstatic.net/200000043306/product/ga_nuong_than_hoa_a43a2804fc54482195e6d37be7ddb027_grande.png',
      title: 'Cơm Đùi Gà Quay Than Hoa',
      price: 49000,
      id: 6,
    },
    {
      image:
        'https://product.hstatic.net/200000043306/product/ba_roi_cce6db8e793a4997bba1b9ff309e0fde_grande.png',
      title: 'Cơm ba rọi nướng ngũ vị',
      price: 52000,
      id: 7,
    },
    {
      image:
        'https://product.hstatic.net/200000043306/product/suon_mem_37e0413282ed4ef08a3deb974ad55faf_grande.png',
      title: 'Cơm Sườn Mềm Phúc Lộc Thọ',
      price: 59000,
      id: 8,
    },
    {
      image:
        'https://product.hstatic.net/200000043306/product/suon_que_2e9f767c4bda4b78acaa1a999fa4d97b_grande.png',
      title: 'Cơm Sườn Non Quay Mật Ong',
      price: 69000,
      id: 9,
    },
  ];
  sideDish: MainDish[] = [
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/bi-da-com-tam-phuc-loc-tho_87e5edac9e164a8996592ec8d9573a3f_grande.png',
      // title: 'Bì Da',
      // price: 15000,
      image:
        'https://product.hstatic.net/200000043306/product/bi-da-com-tam-phuc-loc-tho_87e5edac9e164a8996592ec8d9573a3f_grande.png',
      title: 'Bì Da',
      price: 15000,
      id: 10,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/ch-fina__74404bb9ae5d4f4b8b793b68110e9f22_grande.png',
      // title: 'Chả Hấp',
      // price: 15000,

      image:
        'https://product.hstatic.net/200000043306/product/ch-fina__74404bb9ae5d4f4b8b793b68110e9f22_grande.png',
      title: 'Chả Hấp',
      price: 15000,
      id: 11,
    },

    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/com-them_1abe487dabde4f59bafdc059f9cb0f93_grande_4a293745d8b04657838c143cf18fa4ff_grande.png',
      // title: 'Cơm Thêm',
      // price: 5000,

      image:
        'https://product.hstatic.net/200000043306/product/com-them_1abe487dabde4f59bafdc059f9cb0f93_grande_4a293745d8b04657838c143cf18fa4ff_grande.png',
      title: 'Cơm Thêm',
      price: 5000,
      id: 12,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/trung_kho_27b619b1943f408dbfaf2a314cbdb9b2_grande.png',
      // title: 'Trứng kho',
      // price: 18000,

      image:
        'https://product.hstatic.net/200000043306/product/trung_kho_27b619b1943f408dbfaf2a314cbdb9b2_grande.png',
      title: 'Trứng kho',
      price: 18000,
      id: 13,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/opla-final_4483e50cf245479888616417dbcc1ed2_grande.png',
      // title: 'Trứng Ốp La',
      // price: 15000,

      image:
        'https://product.hstatic.net/200000043306/product/opla-final_4483e50cf245479888616417dbcc1ed2_grande.png',
      title: 'Trứng Ốp La',
      price: 15000,
      id: 14,
    },
  ];
  soup: MainDish[] = [
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/crb-final_e9a087f8ff574c7e98bae5ee7b5be5aa_grande.png',
      // title: 'Canh Rong Biển Thanh Mát',
      // price: 15000,
      image:
        'https://product.hstatic.net/200000043306/product/crb-final_e9a087f8ff574c7e98bae5ee7b5be5aa_grande.png',
      title: 'Canh Rong Biển Thanh Mát',
      price: 15000,
      id: 15,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/canh_kho_qua_536f0677354444dd817e9d503ecfc54a_grande.png',
      // title: 'Canh Khổ Qua Nhồi Thịt ',
      // price: 20000,
      image:
        'https://product.hstatic.net/200000043306/product/canh_kho_qua_536f0677354444dd817e9d503ecfc54a_grande.png',
      title: 'Canh Khổ Qua Nhồi Thịt ',
      price: 20000,
      id: 16,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/canh_kho_qua_536f0677354444dd817e9d503ecfc54a_grande.png',
      // title: 'Canh chua Nam Bộ Chén',
      // price: 15000,

      image:
        'https://product.hstatic.net/200000043306/product/canh_kho_qua_536f0677354444dd817e9d503ecfc54a_grande.png',
      title: 'Canh chua Nam Bộ Chén',
      price: 15000,
      id: 17,
    },
  ];
  water: MainDish[] = [
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/tra_dao_030a0a204a75467ba584400c73c78c6d_grande.png',
      // title: 'Trà Đào Thạch Giòn',
      // price: 25000,

      image:
        'https://product.hstatic.net/200000043306/product/tra_dao_030a0a204a75467ba584400c73c78c6d_grande.png',
      title: 'Trà Đào Thạch Giòn',
      price: 25000,
      id: 18,
    },

    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/coca-cola-com-tam-phuc-loc-tho_e022d2563c484438901e836fccf38ff0_grande.png',
      // title: 'Coca-Cola Tươi',
      // price: 15000,

      image:
        'https://product.hstatic.net/200000043306/product/coca-cola-com-tam-phuc-loc-tho_e022d2563c484438901e836fccf38ff0_grande.png',
      title: 'Coca-Cola Tươi',
      price: 15000,
      id: 19,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/nuoc-sam-com-tam-phuc-loc-tho_be111efd23a746b88d818779f595746e_grande.png',
      // title: 'Sâm Bí Đao Ly',
      // price: 15000,

      image:
        'https://product.hstatic.net/200000043306/product/nuoc-sam-com-tam-phuc-loc-tho_be111efd23a746b88d818779f595746e_grande.png',
      title: 'Sâm Bí Đao Ly',
      price: 15000,
      id: 20,
    },
    {
      // image:
      //   'https://product.hstatic.net/200000043306/product/tra-tac-com-tam-phuc-loc-tho_e50e88d02d6a493ca7669b68efd277cb_grande.png',
      // title: 'Sâm Bí Đao Ly',
      // price: 15000,
      image:
        'https://product.hstatic.net/200000043306/product/tra-tac-com-tam-phuc-loc-tho_e50e88d02d6a493ca7669b68efd277cb_grande.png',
      title: 'Sâm Bí Đao Ly',
      price: 15000,
      id: 21,
    },
  ];

  constructor() {}

  // getSideDishById(id: number) {
  //   return this.sideDish.find((sideDish) => sideDish.id == id);
  // }
  //
  // getWaterById(id: number) {
  //   return this.water.find((water) => water.id == id);
  // }
  //
  // getSoupById(id: number) {
  //   return this.soup.find((soup) => soup.id == id);
  // }

  getMainDishById(id: number) {
    console.log(id);
    return this.mainDish.find((mainDish) => mainDish.id == id);
  }

  getComboById(id: number) {
    return this.ComboS.find((combo) => {
      console.log(id);
      return combo.id == id;
    });
  }
}
