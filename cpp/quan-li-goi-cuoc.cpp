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

int main() {
	GoiBasic gb1;
	gb1.set(200,100);
	cout << "Cuoc dien thoai: " << gb1.tinhCDT() << endl;
	cout << "Cuoc internet: " << gb1.tinhCI() << endl;
	cout << "Cuoc tong: " << gb1.tinhTC() << endl;
	return 0;
}
