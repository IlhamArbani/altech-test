function fishBash(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
    } else {
      console.log(i);
    }
  }
}

function sortArray(arr) {
  let ascending = arr.slice();
  let descending = arr.slice();

  for (let i = 0; i < ascending.length; i++) {
    for (let j = i + 1; j < ascending.length; j++) {
      if (ascending[i] > ascending[j]) {
        let temp = ascending[i];
        ascending[i] = ascending[j];
        ascending[j] = temp;
      }
      if (descending[i] < descending[j]) {
        let temp = descending[i];
        descending[i] = descending[j];
        descending[j] = temp;
      }
    }
  }

  return { ascending, descending };
}

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = { fishBash, sortArray, isPalindrome };