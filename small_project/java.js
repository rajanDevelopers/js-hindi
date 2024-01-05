// function arr() {
//   arr = [2, 3, 4, 1, 6, 10];
//   Tem1 = [];
//   Tem2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 2) {
//       Tem1.push(arr[i]);
//     } else {
//       Tem2.push(arr[i]);
//     }
//   }
//   temp = [...Tem2, ...Tem1];
//   return temp;
// }
// console.log(arr());

// Using ChartGpt  through solve
function ArrayChallenge(arr) {
  // Extract the rotation position N from the first element of the array
  const rotationPosition = arr[0];

  // Calculate the effective rotation position (taking into account array length)
  const effectiveRotationPosition = rotationPosition % arr.length;

  // Rotate the array using slice and concatenate
  const rotatedArray = arr
    .slice(effectiveRotationPosition)
    .concat(arr.slice(0, effectiveRotationPosition));

  // Convert the rotated array to a string and return
  const result = rotatedArray.join("");
  return result;
}

// Example usage:
const inputArray = [2, 3, 4, 1, 6, 10];
const rotatedString = ArrayChallenge(inputArray);
console.log(rotatedString); // Output: 4161023
