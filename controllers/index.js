// var arrMonAn = [
//   { maMonAn: 1, tenMonAn: "Nước lẩu haidilao", giaTien: 100 },
//   { maMonAn: 2, tenMonAn: "Mì cay thành đô", giaTien: 200 },
//   { maMonAn: 3, tenMonAn: "Mực bạch ngọc", giaTien: 300 },
// ];

import { MonAn } from "../models/MonAn.js";

let arrayMonAn = [];

let renderDanhSachMonAn = (arrayMonAn) => {
  let stringHTML = "";
  for (let monAn of arrayMonAn) {
    let trHTML = `<tr>
      <td>${monAn.maMonAn}</td>
      <td>${monAn.tenMonAn}</td>
      <td>${monAn.giaTien}</td>
      <td><img src="${monAn.linkAnh}"/></td>
    </tr>`;
    stringHTML += trHTML;
  }
  document.querySelector(".baiTap1 .table .tblDanhMucMonAn").innerHTML = stringHTML;
};

let buttonThemMonAn = document.querySelector(".baiTap1 .card .btn-success");
buttonThemMonAn.onclick = () => {
  let monAn = new MonAn();
  let arrayInput = document.querySelectorAll(".baiTap1 .card input");
  for (let input of arrayInput) {
    let { id, value } = input;
    monAn[id] = value;
  }
  arrayMonAn.push(monAn);
  renderDanhSachMonAn(arrayMonAn);
};
