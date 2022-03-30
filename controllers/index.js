// var arrMonAn = [
//   { maMonAn: 1, tenMonAn: "Nước lẩu haidilao", giaTien: 100 },
//   { maMonAn: 2, tenMonAn: "Mì cay thành đô", giaTien: 200 },
//   { maMonAn: 3, tenMonAn: "Mực bạch ngọc", giaTien: 300 },
// ];

import { MonAn } from "../models/MonAn.js";
import { Menu } from "../models/Menu.js";

let menu = new Menu();

let buttonThemMonAn = document.querySelector(".baiTap1 .card .btn-success");
buttonThemMonAn.onclick = () => {
  let monAn = new MonAn();
  let arrayInput = document.querySelectorAll(".baiTap1 .card input");
  for (let input of arrayInput) {
    let { id, value } = input;
    monAn[id] = value;
  }

  menu.themMonAn(monAn);
  menu.render(".baiTap1 .table .tblDanhMucMonAn");
};

window.xoaMon = (maMon) => {
  menu.xoaMonAn(maMon);
  menu.render(".baiTap1 .table .tblDanhMucMonAn");
};
