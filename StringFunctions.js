function reverseString(string) {
  let singleChar;
  let reverserdText = "";
  for (let i = string.length; i > 0; i--) {
    singleChar = string.charAt(i - 1);
    reverserdText = reverserdText + singleChar;
  }
  console.log(reverserdText);
}

reverseString("Hi, I'm gonna be reversed!");
