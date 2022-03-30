import { LOCAL_STORAGE_NAME } from "../controllers/util.js";

export class Menu {
  arrayMonAn = [];

  constructor() {}

  themMonAn(monAn) {
    this.arrayMonAn.push(monAn);
    return this.arrayMonAn;
  }

  xoaMonAn(maMon) {
    this.arrayMonAn = this.arrayMonAn.filter((monAn) => monAn.maMonAn !== maMon);
    return this.arrayMonAn;
  }

  luuLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(this.arrayMonAn));
  }

  getLocalStorage() {
    if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
      this.arrayMonAn = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
    }
  }

  render(selector) {
    let stringHTML = "";
    for (let monAn of this.arrayMonAn) {
      stringHTML += `<tr>
        <td>${monAn.maMonAn}</td>
        <td>${monAn.tenMonAn}</td>
        <td>${monAn.giaTien}</td>
        <td><img src="${monAn.linkAnh}"/></td>
        <td><button class="btn btn-danger" onclick=xoaMon('${monAn.maMonAn}')>Xoá</button></td>
      </tr>`;
    }
    document.querySelector(selector).innerHTML = stringHTML;
  }
}
