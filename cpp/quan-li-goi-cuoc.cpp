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
	return 0;
}
