#include <iostream>
#include <string>
using namespace std;

class GoiCuoc {
	protected:
		double thoiGianGoi;
		double luuLuong;
	public:
		GoiCuoc() {
			thoiGianGoi = 0;
			luuLuong = 0;
		}
		void set(double thoiGianGoi, double luuLuong) {
			this->thoiGianGoi = thoiGianGoi;
			this->luuLuong = luuLuong;
		}
		virtual double tinhCDT() = 0;
		virtual double tinhCI() = 0;
		virtual double tinhTC() = 0;
};

class GoiBasic : public GoiCuoc {
	public:
		GoiBasic() {
		}
		double tinhCDT() override {
			return thoiGianGoi * 1000;
		}
		double tinhCI() override {
			return luuLuong * 2000;
		}
		double tinhTC() override {
			return (tinhCDT() + tinhCI()) * 1.1;
		}
};

class KhachHang {
	private:
		string hoTen;
		string cccd;
		string diaChi;
	public:
		KhachHang() {
			hoTen = "";
			cccd = "";
			diaChi = "";
		}
		KhachHang(string hoTen, string cccd, string diaChi) {
			this->hoTen = hoTen;
			this->cccd = cccd;
			this->diaChi = diaChi;
		}
		void nhap() {
			cout << "Nhap ho ten: ";
			getline(cin, hoTen);
			cout << "Nhap cccd: ";
			getline(cin, cccd);
			cout << "Nhap dia chi: ";
			getline(cin, diaChi);
		}
		void xuat() {
			cout << " - Ho ten khach hang: " << hoTen << endl;
			cout << " - CCCD: " << cccd << endl;
			cout << " - Dia chi: " << diaChi << endl;
		}
};

class HoaDon {
	private:
		KhachHang kh;
		GoiCuoc *goi;
	public:
		HoaDon(KhachHang kh, GoiCuoc *g) {
			this->kh = kh;
			this->goi = goi;
		}
		void inHoaDon() {
			kh.xuat();
			cout << "Tong cuoc: " << goi->tinhTC() << " VND";
		}
};

int main() {
	GoiBasic gb1;
	gb1.set(200,100);
	cout << "Cuoc dien thoai: " << gb1.tinhCDT() << endl;
	cout << "Cuoc internet: " << gb1.tinhCI() << endl;
	cout << "Cuoc tong: " << gb1.tinhTC() << endl;
	KhachHang kh1("Nguyen Thi Kim Phuc", "072100900315", "TP.HCM");
	kh1.xuat();
	KhachHang kh2;
	kh2.nhap();
	kh2.xuat();
	HoaDon hd1(kh2, &gb1);
	hd1.inHoaDon();
	return 0;
}
