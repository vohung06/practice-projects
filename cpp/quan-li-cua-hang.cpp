#include <iostream>
#include <string>
#include <vector>
using namespace std;

class XeMay {
	protected:
		string bienSo;
		int namSX;
	public:
		XeMay() {
			bienSo = "";
			namSX = 0;
		}
		void nhap() {
			cout << "Nhap bien so: ";
			getline(cin, bienSo);
			cout << "Nhap nam san xuat: ";
			cin >> namSX;
			cin.ignore();
		}
		virtual void xuat() {
			cout << " - Bien so: " << bienSo << endl;
			cout << " - Nam san xuat: " << namSX << endl;
		}
		virtual int tinhTGBaoHanh() = 0;
};

class XeXang : public XeMay {
	double dungTichXiLanh;
	public:
		XeXang() {
			dungTichXiLanh = 0;
		}
		XeXang(double dungTichXiLanh) {
			this->dungTichXiLanh = dungTichXiLanh;
		}
		void nhapXeXang() {
			nhap();
			cout << "Nhap dung tich xi lanh: ";
			cin >> dungTichXiLanh;
		}
		void xuat() {
			XeMay::xuat();
			cout << " - Dung tich xi lanh: " << dungTichXiLanh << " cm3"<< endl;
		}
		int tinhTGBaoHanh() {
			return namSX + 1;
		}
};

class XeDien : public XeMay {
	double dungLuongPin;
	public:
		XeDien() {
			dungLuongPin = 0;
		}
		XeDien(double dungLuongPin) {
			this->dungLuongPin = dungLuongPin;
		}
		void nhapXeDien() {
			nhap();
			cout << "Nhap dung luong pin: ";
			cin >> dungLuongPin;
		}
		void xuat() {
			XeMay::xuat();
			cout << " - Dung luong pin: " << dungLuongPin << " Ah"<< endl;
		}
		int tinhTGBaoHanh() {
			return namSX + 3;
		}
};

int main() {
	vector <XeMay*> ds;
	int n;
	do {
		cout << "Nhap n: ";
		cin >> n;
	} while(n < 2);
	for (int i = 0; i < n; i++) {
		int choice;
		do {
			cout << i + 1 << ". Chon loai xe: 1 - xe xang; 2 - xe dien: ";
			cin >> choice;
			cin.ignore();
		} while (!(choice == 1 || choice == 2));
		if (choice == 1) {
			XeXang *temp = new XeXang();
			temp->nhapXeXang();
			ds.push_back(temp);
		}
		else {
			XeDien *temp = new XeDien();
			temp->nhapXeDien();
			ds.push_back(temp);
		}
	}
	for (auto x:ds) {
		cout << "-THONG TIN XE: " << endl;
		x->xuat();
	}		
			
	return 0;
}
