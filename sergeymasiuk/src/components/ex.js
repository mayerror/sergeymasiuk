// function pascalsTriangle(n) {
//   const arr = Array(n)
//     .fill(1)
//     .map((_, index) => Array(index + 1).fill(1))
//     .map((y, index) => {
//       const item = y;
//       if (index >= 2) {
//         item.map((x, i) => {
//           if (i !== 0 && i !== item.length) {
//             return item[index-1][i-1] + item[index-1][i];
//           }
//           return x;
//         });
//       }
//       return item;
//     });
//   return arr;
// }

// console.log(pascalsTriangle(5));

// function prefill(n, v) {
//   console.log(n);
//   // if (!n) return [];
//   const num = +n;
//   if (!(typeof n === 'number' || typeof n === 'string') || +n < 0 || Number.isNaN(n))
//     throw new TypeError(`${n} is invalid!`);
//   return Array(num).fill(v);
// }

// // throw Error('example error')
// console.log(prefill(NaN, 1));

// try {
//   throw new TypeError("Hello", "someFile.js", 10);
// } catch (e) {
//   console.log(e instanceof TypeError); // true
//   console.log(e.message); // "Hello"
//   console.log(e.name); // "TypeError"
//   console.log(e.fileName); // "someFile.js"
//   console.log(e.lineNumber); // 10
//   console.log(e.columnNumber); // 0
//   console.log(e.stack); // "@Scratchpad/2:2:9\n"
// }

// function sumDigPow(a, b) {
//   return Array.from(Array(b - a).keys())
//     .map((x) => x + a)
//     .reduce((p, c) => {
//       if (c<10 ||
//         String(c)
//           .split('')
//           .reduce((x, y, i) => +x + y ** (i + 1)) === c
//       )
//         return [...p, c];
//       return p;
//     }, []);
// }

// console.log(sumDigPow(1, 10));
// console.log(sumDigPow(1, 100));
// console.log(sumDigPow(10, 100));



// // console.log(checkWord('deerpr'));
// // console.log(checkWord('deeppyyazr'));

// console.log(solution(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night']));

function checkWord(word) {
  return word
    .slice(1, -1)
    .split('')
    .reduce((p, c, i, arr) => {
      if (!p) return p;
      if (i % 2 === 0 && c !== arr[i + 1]) return false;
      return true;
    }, true);
}

function enumaration(ar) {
  const finalArr = [];
  if (ar.length === 2) {
    return [`${ar[0]}${ar[1]}`, `${ar[1]}${ar[0]}`];
  }

  let str = '';
  for (let i = 0; i < ar.length; i++) {
    const array = [...ar];
    array.splice(i,1);
    const enumArr = enumaration(array);
    for (let j = 0; j < enumArr.length; j++) {
      str = ar[i] + enumArr[j];
      finalArr.push(str);
    }
  }
  return finalArr;
}

function solution(words) {
  const arr = words.map((x) => `${x[0]}${x.at(-1)}`);
  return enumaration(arr).some(word=>{
    // console.log(word);
    return checkWord(word);
  });
}

// console.log(enumaration(['1', '2', '3', '4']));
console.log(solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"]));
