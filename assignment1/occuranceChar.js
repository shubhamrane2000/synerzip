const countChars = (string) => {
    let charStats = {};
    string = string.toLowerCase().split('');

    string.forEach((char) => {
        if (charStats[char]) {
            charStats[char]++;
        } else {
            charStats[char] = 1;
        }
    });

    return charStats;
};

console.log(countChars("shubham rane"));