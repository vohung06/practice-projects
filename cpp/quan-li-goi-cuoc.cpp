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


int main() {
	return 0;
}
