
/**
 * Problem 1: Staircase
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const hashes = "#".repeat(i);

        result.push(spaces + hashes);
    }

    return result.join("\n");
};

// Test cases
console.log(staircase(4));
console.log(staircase(1));
console.log(staircase(5));




/**
 * Problem 2: Grading Students
 *
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
    return grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        const nextMultiple = Math.ceil(grade / 5) * 5;
        const difference = nextMultiple - grade;

        if (difference < 3) {
            return nextMultiple;
        }

        return grade;
    });
};

// Test cases
console.log(gradingStudents([73, 67, 38, 33]));
console.log(gradingStudents([84, 29, 57]));
console.log(gradingStudents([37, 38, 39, 40, 41, 42]));




/**
 * Problem 3: Time Conversion
 *
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
    const period = s.slice(-2);
    const time = s.slice(0, -2);
    let [hours, minutes, seconds] = time.split(":");

    if (period === "AM") {
        if (hours === "12") {
            hours = "00";
        }
    } else {
        if (hours !== "12") {
            hours = String(Number(hours) + 12);
        }
    }

    return `${hours}:${minutes}:${seconds}`;
};

// Test cases
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:30:45PM"));
console.log(timeConversion("01:00:00AM"));
console.log(timeConversion("11:59:59PM"));



/**
 * Problem 4: String Repeat
 *
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
    return s.repeat(n);
};

// Test cases
console.log(repeatStr(3, "ha"));
console.log(repeatStr(0, "hello"));
console.log(repeatStr(4, "a"));
console.log(repeatStr(3, ""));




/**
 * Problem 5: Reversed Strings
 *
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
    return str.split("").reverse().join("");
};

// Test cases
console.log(solution("world"));
console.log(solution("hello"));
console.log(solution(""));



/**
 * Problem 6: Sum of Positive
 *
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
    return arr.reduce((sum, num) => {
        return num > 0 ? sum + num : sum;
    }, 0);
};

// Test cases
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1, -2, 0, -5]));



/**
 * Problem 7: Grasshopper — Summation
 *
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
    return (num * (num + 1)) / 2;
};

// Test cases
console.log(summation(8));
console.log(summation(1));



/**
 * Problem 8: Convert a Boolean to a String
 *
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
    return String(b);
};

// Test cases
console.log(booleanToString(true));
console.log(booleanToString(false));


/**
 * Problem 9: Fizz Buzz
 *
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
};

// Test cases
console.log(JSON.stringify(fizzBuzz(5)));
console.log(JSON.stringify(fizzBuzz(15)));



/**
 * Problem 10: Running Sum of 1D Array
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const result = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
};

// Test cases
console.log(JSON.stringify(runningSum([1, 2, 3, 4])));
console.log(JSON.stringify(runningSum([1, 1, 1, 1, 1])));



/**
 * Problem 11: Richest Customer Wealth
 *
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxWealth = 0;

    for (const account of accounts) {
        const totalWealth = account.reduce((sum, money) => sum + money, 0);

        if (totalWealth > maxWealth) {
            maxWealth = totalWealth;
        }
    }

    return maxWealth;
};

// Test cases
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]));




/**
 * Problem 12: Remove Duplicates from Sorted Array
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// Test cases
const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));
console.log(nums1.slice(0, 2));

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2));
console.log(nums2.slice(0, 5));




/**
 * Problem 13: Contains Duplicate
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
};

// Test cases
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));



/**
 * Problem 14: Move Zeroes
 *
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
    let position = 0;

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[position] = nums[i];
            position++;
        }
    }

    // Fill the remaining positions with zeros
    while (position < nums.length) {
        nums[position] = 0;
        position++;
    }
};

// Test cases
const nums3 = [0, 1, 0, 3, 12];
moveZeroes(nums3);
console.log(nums3);

const nums4 = [0, 0, 1];
moveZeroes(nums4);
console.log(nums4);

const nums5 = [1, 2, 3];
moveZeroes(nums5);
console.log(nums5);




/**
 * Problem 15: Merge Sorted Array
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    // Merge from the end to avoid overwriting valid elements
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};

// Test cases
const nums6 = [1, 2, 3, 0, 0, 0];
merge(nums6, 3, [2, 5, 6], 3);
console.log(nums6);

const nums7 = [1];
merge(nums7, 1, [], 0);
console.log(nums7);

const nums8 = [0];
merge(nums8, 0, [1], 1);
console.log(nums8);




/**
 * Problem 16: 3Sum
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate first elements
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // Skip duplicate left and right elements
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

// Test cases
console.log(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])));
console.log(JSON.stringify(threeSum([0, 1, 1])));
console.log(JSON.stringify(threeSum([0, 0, 0])));




/**
 * Problem 17: Plus One
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    // If every digit was 9, add a leading 1
    digits.unshift(1);

    return digits;
};

// Test cases
console.log(JSON.stringify(plusOne([1, 2, 9])));
console.log(JSON.stringify(plusOne([4, 3, 2, 1])));
console.log(JSON.stringify(plusOne([9, 9, 9])));



/**
 * Problem 18: Reverse String
 *
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Swap the characters at both ends
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};

// Test cases
const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(JSON.stringify(s1));

const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(JSON.stringify(s2));



/**
 * Problem 19: Length of Last Word
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === " ") {
        i--;
    }

    let length = 0;

    // Count characters in the last word
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }

    return length;
};

// Test cases
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("  fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));



/**
 * Problem 20: Longest Common Prefix
 *
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
};

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));