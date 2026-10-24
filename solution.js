
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
// console.log(staircase(4));
// console.log(staircase(1));
// console.log(staircase(5));




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
// console.log(gradingStudents([73, 67, 38, 33]));
// console.log(gradingStudents([84, 29, 57]));
// console.log(gradingStudents([37, 38, 39, 40, 41, 42]));




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
// console.log(timeConversion("07:05:45PM"));
// console.log(timeConversion("12:00:00AM"));
// console.log(timeConversion("12:30:45PM"));
// console.log(timeConversion("01:00:00AM"));
// console.log(timeConversion("11:59:59PM"));



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
// console.log(repeatStr(3, "ha"));
// console.log(repeatStr(0, "hello"));
// console.log(repeatStr(4, "a"));
// console.log(repeatStr(3, ""));




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
// console.log(solution("world"));
// console.log(solution("hello"));
// console.log(solution(""));



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
// console.log(positiveSum([1, -4, 7, 12]));
// console.log(positiveSum([-1, -2, 0, -5]));



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
// console.log(summation(8));
// console.log(summation(1));



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


