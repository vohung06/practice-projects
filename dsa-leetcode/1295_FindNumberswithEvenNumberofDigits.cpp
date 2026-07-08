//1295. Find Numbers with Even Number of Digits
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int count = 0;
        for (int i = 0; i < nums.size(); i++) {
            int digits = 0;
            int num = nums[i];
            if (num == 0) {
                digits = 1;
            } else {
                while (num != 0) {
                    num /= 10;
                    digits ++;
                }
            }
            if (digits % 2 == 0)
                count++;
        }
        return count;
    }
};

