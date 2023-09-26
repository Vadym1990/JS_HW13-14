const str = 'aaaaa bb aaa bb aa ccc dd mm nn aa cccc';
const blackList = ['aa', 'ccc'];

console.log(str,);

function filterBadWord(string, array) {
    let newStr = string;

    for (let i = 0; i < array.length; i++) {
        while (newStr.indexOf(array[i]) !== -1) {
            newStr = newStr.replace(array[i], '*'.repeat(array[i].length));
        }
    }
    console.log(newStr);
    return newStr;
}

filterBadWord(str, blackList);
