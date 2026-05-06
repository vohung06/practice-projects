#include <iostream>
#include <string>
using namespace std;

int main() {
	char board[3][3] = {
		{' ', ' ', ' '},
		{' ', ' ', ' '},
		{' ', ' ', ' '}
	};
	
	const char playerX = 'X';
	const char playerO = 'O';
	char currentPlayer = playerX;
	int r = -1;
	int c = -1;
	char winner = ' ';
	
	for (int i = 0; i < 9; i++) {
		//in bang
		cout << "   |   |   " << endl;
		cout << " " << board[0][0] << " | " << board[0][1] << " | " << board[0][2] << endl;
		cout << "___|___|___" << endl;
		cout << "   |   |   " << endl;
		cout << " " << board[1][0] << " | " << board[1][1] << " | " << board[1][2] << endl;
		cout << "___|___|___" << endl;
		cout << "   |   |   " << endl;
		cout << " " << board[2][0] << " | " << board[2][1] << " | " << board[2][2] << endl;
		cout << "   |   |   " << endl;
		
		if (winner != ' ')
			break;
		
		cout << "Nguoi choi hien tai la: " << currentPlayer << endl;
		//xu ly cac truong hop nhap input cua user
		while (true) {
			cout << "Nhap hang va cot tu 0 - 2: ";
			//sua loi neu nguoi dung nhap gia tri co kieu du lieu khong hop le (chuoi, thap phan...)
			if(!(cin >> r >> c)) {
				cout << "Du lieu khong hop le, vui long thu lai!" << endl;
				cin.clear(); //xoa trang thai loi
				cin.ignore(1000, '\n'); //xoa rac trong buffered
				continue;
			}
			if (r < 0 || r > 2 || c < 0 || c > 2)
				cout << "O khong hop le, vui long thu lai! " << endl;
			else if (board[r][c] != ' ')
				cout << "O nay da duoc chon, vui long thu lai!" << endl;
			else
				break;
			r = -1;
			c = -1;
		}

		board[r][c] = currentPlayer;
		currentPlayer = (currentPlayer == playerX) ? playerO : playerX;
		
		//kiem tra chien thang
		//hang doc
		for (int j = 0; j < 3; j++) {
			if (board[j][0] != ' ' && board[j][0] == board[j][1] && board[j][1] == board[j][2]) {
				winner = board[j][0];
				break;
			}
		}
		//hang ngang
		for (int j = 0; j < 3; j++) {
			if (board[0][j] != ' ' && board[0][j] == board[1][j] && board[1][j] == board[2][j]) {
				winner = board[0][j];
				break;
			}
		}
		//hang cheo
		if (board[0][0] != ' ' && board[0][0] == board [1][1] && board [1][1] == board[2][2]) {
			winner = board[0][0];
		}
		else if (board[0][2] != ' ' && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
			winner = board[0][2];
		}
	}
	
	if (winner != ' ') 
		cout << "Xin chuc mung! Nguoi choi " << winner << " da chien thang!!!" << endl;
	else 
		cout << "Hoa!!!" << endl;
		
	return 0;
}
