function r(str) {
  let rs = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rs += str.charAt(i);
  }
  return rs;
}

function c(str) {
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    charCount++;
  }
  return charCount;
}

function majus(sentence) {
  let w = [];
  let word = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) === " ") {
      w.push(word);
      word = "";
    } else {
      word += sentence.charAt(i);
    }
  }
  w.push(word);

  let y = "";
  for (let i = 0; i < w.length; i++) {
    let z = w[i];
    if (z.length > 0) {
      y += z.charAt(0).toUpperCase();
      for (let j = 1; j < z.length; j++) {
        y += z.charAt(j);
      }
    }
    if (i < w.length - 1) {
      y += " ";
    }
  }
  return y;
}

function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}

function sum(arr) {
  let h = 0;
  for (let i = 0; i < arr.length; i++) {
    let o = arr[i];
    h += o;
  }
  return h;
}

function f(arr) {
  let tab = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      tab.push(arr[i]);
    }
  }
  return tab;
}

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

function q(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function l(n) {
  let k = [0, 1];
  for (let i = 2; i < n; i++) {
    k.push(k[i - 1] + k[i - 2]);
  }
  return k;
}

const phrase = "salut cv ?";
console.log("Reversed:", r(phrase));
console.log("Character Count:", c(phrase));
console.log("Capitalized:", majus(phrase));

const tab = [4, 5, 9, 1, 7, 10];
console.log("Max:", max(tab));
console.log("Min:", min(tab));
console.log("Sum:", sum(tab));
console.log("Filtered (even numbers):", f(tab));

const number = 8;
console.log("Factorial:", fact(number));
console.log("Is Prime:", q(number));
console.log("l Sequence:", l(number));
