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
	
	for (int i = 0; i < 9; i++) {
		cout << "   |   |   " << endl;
		cout << " " << board[0][0] << " | " << board[0][1] << " | " << board[0][2] << endl;
		cout << "___|___|___" << endl;
		cout << "   |   |   " << endl;
		cout << " " << board[1][0] << " | " << board[1][1] << " | " << board[1][2] << endl;
		cout << "___|___|___" << endl;
		cout << "   |   |   " << endl;
		cout << " " << board[2][0] << " | " << board[2][1] << " | " << board[2][2] << endl;
		cout << "   |   |   " << endl;
		
		cout << "Nguoi choi hien tai la: " << currentPlayer << endl;
		cout << "Nhap hang va cot tu 0 - 2: ";
		cin >> r >> c;
		
		board[r][c] = currentPlayer;
		currentPlayer = (currentPlayer == playerX) ? playerO : playerX;
		
	}
	return 0;
}
