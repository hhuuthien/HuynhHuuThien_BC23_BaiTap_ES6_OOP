import { MonAn } from "../models/MonAn.js";
import { Menu } from "../models/Menu.js";

let menu = new Menu();
menu.getLocalStorage();
menu.render(".baiTap1 .table .tblDanhMucMonAn");

// thêm món
document.querySelector(".baiTap1 .card .btn-success").onclick = () => {
  let monAn = new MonAn();
  let arrayInput = document.querySelectorAll(".baiTap1 .card input");
  for (let input of arrayInput) {
    let { id, value } = input;
    monAn[id] = value;
  }

  menu.themMonAn(monAn);
  menu.render(".baiTap1 .table .tblDanhMucMonAn");
  menu.luuLocalStorage();
};

// xoá món
window.xoaMon = (maMon) => {
  menu.xoaMonAn(maMon);
  menu.render(".baiTap1 .table .tblDanhMucMonAn");
  menu.luuLocalStorage();
};

//
//
// Bài tập 2
//
//

var arrMonAn = [
  { maMonAn: 1, tenMonAn: "Nước lẩu haidilao", giaTien: 100 },
  { maMonAn: 2, tenMonAn: "Mì cay thành đô", giaTien: 200 },
  { maMonAn: 3, tenMonAn: "Mực bạch ngọc", giaTien: 300 },
];

let renderMenu = (arrMonAn) => {
  let stringHTML = "";
  for (let monAn of arrMonAn) {
    stringHTML += `<div class="row mt-3">
      <div class="col-3">${monAn.maMonAn}</div>
      <div class="col-3">${monAn.tenMonAn}</div>
      <div class="col-3">${monAn.giaTien}</div>
      <div class="col-3">
        <button class="btn btn-danger">+</button>
        <button class="btn btn-danger">-</button>
      </div>
    </div>`;
  }
  document.querySelector(".baiTap2 .card .card-body").innerHTML += stringHTML;
};

renderMenu(arrMonAn);
