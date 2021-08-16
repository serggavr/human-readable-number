module.exports = function toReadable (num) {
    if (num == 0) {
        return 'zero'
    };
    const dictToNine = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
    const dictToNineteen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };
    const dictToNinety = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    };
    let answer = '';
    let upRest;
    let downRest;
    let numString = num.toString();
    switch (numString.length) {
        case 3:
            downRest = num % 100;
            upRest = (num - downRest) / 100;
            answer += `${dictToNine[upRest]} hundred `;
            num -= (upRest * 100);
        case 2:
            if (num < 20) {
                answer += `${dictToNineteen[num]}`;
                break;
            }
            if (num % 10 == 0) {
                answer += `${dictToNinety[num]}`;
                num -= num;
            } else {
                downRest = num % 10;
                upRest = num - downRest;
                answer += `${dictToNinety[upRest]} `;
                num -= upRest;
            };
        case 1:
            if (num == 0) {break}
            answer += `${dictToNine[num]}`;
    }
    // console.log(answer)
    return answer;

};
// toReadable(1);