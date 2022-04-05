export class HoaDon {
  danhSachMonAnTrongHoaDon = [];
  thanhTien = 0;

  constructor() {}

  themMonAn(monAn) {
    let monAnTrongHoaDon = this.danhSachMonAnTrongHoaDon.find((mon) => mon.maMonAn === monAn.maMonAn);

    if (monAnTrongHoaDon) {
      // có trong hoá đơn rồi
      monAnTrongHoaDon.soLuong++;
      monAnTrongHoaDon.thanhTien = monAnTrongHoaDon.soLuong * monAnTrongHoaDon.giaTien;
    } else {
      // chưa có trong hoá đơn
      this.danhSachMonAnTrongHoaDon.push({ ...monAn, soLuong: 1, thanhTien: monAn.giaTien });
    }
  }

  giamMonAn(maMonAn) {
    let monAnTrongHoaDon = this.danhSachMonAnTrongHoaDon.find((mon) => mon.maMonAn === maMonAn);

    if (monAnTrongHoaDon) {
      // kiểm tra có tồn tại trong hoá đơn
      if (monAnTrongHoaDon.soLuong > 1) {
        // giảm số lượng
        monAnTrongHoaDon.soLuong--;
        monAnTrongHoaDon.thanhTien = monAnTrongHoaDon.soLuong * monAnTrongHoaDon.giaTien;
      } else {
        // nếu còn có 1 cái thì xoá luôn
        if (window.confirm("Bạn có muốn xoá món ăn khỏi hoá đơn không?")) {
          this.danhSachMonAnTrongHoaDon = this.danhSachMonAnTrongHoaDon.filter((mon) => mon.maMonAn !== maMonAn);
        }
      }
    }
  }

  tinhTongTien() {
    let total = 0;
    for (let monAn of this.danhSachMonAnTrongHoaDon) {
      total += monAn.thanhTien;
    }
    this.thanhTien = total;
  }

  render(selector) {
    if (this.danhSachMonAnTrongHoaDon.length !== 0) {
      let stringHTML = "";
      for (let monAn of this.danhSachMonAnTrongHoaDon) {
        stringHTML += `<tr>
        <td>${monAn.maMonAn}</td>
        <td>${monAn.tenMonAn}</td>
        <td>${monAn.soLuong}</td>
        <td>${monAn.thanhTien}</td></tr>`;
      }
      stringHTML += `<tr>
        <td></td>
        <td></td>
        <td><b>Thành tiền</b></td>
        <td><b>${this.thanhTien}</b></td></tr>`;
      document.querySelector(selector).innerHTML = stringHTML;
    } else {
      document.querySelector(selector).innerHTML = `<tr><td colspan=4>Chưa có món ăn</td></tr>`;
    }
  }
}
