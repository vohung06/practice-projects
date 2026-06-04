#include <iostream>
#include <string>
using namespace std;

class XeMay {
	string bienSo;
	int namSX;
	public:
		void nhap() {
			cout << "Nhap bien so: " << endl;
			getline(cin, bienSo);
			cout << "Nhap nam san xuat: " << endl;
			cin >> namSX;
			cin.ignore();
		}
		void xuat() {
			cout << " - Bien so: " << bienSo << endl;
			cout << " - Nam san xuat: " << namSX << endl;
		}
		virtual int tinhTGBaoHanh() = 0;
};

class XeXang : public XeMay {
	
};

int main() {
	return 0;
}
