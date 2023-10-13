// These are the falsey Value in javaScript

const falesyalseValur = false;

if (falesyalseValur) {
  console.log("This is false value");
} else {
  console.log("false always Falsey valur hota hai");
}

// variable = 0 ==> falsey vlaue hai

const zeroValue = 0;
if (zeroValue) {
  console.log("This is TrutyValue hai ");
} else {
  console.log("Zero is falsey Value ");
}

// variable = -0 ==> falsey vlaue hai
const NegativeZeroValue = -0;
if (NegativeZeroValues) {
  console.log("Negative Zero is TrutyValue hai ");
} else {
  console.log(" Negative Zero is falsey Value ");
}

// Varibale = BigInt ==> falsey value hai

const BigIntValue = BigInt;
if (BigIntValue) {
  console.log("BigInt is the truety value ");
} else {
  console.log("BigInt is falsey Value");
}

// variable = 0n ==> falsey value hai

const ZeroAndN = 0n;
if (ZeroAndN) {
  console.log("ZeroAnd n (0n) is the truety value hai ");
} else {
  console.log("ZeroAnd n (0n) is the falsety value  ");
}

// variable = null ==> falsey Value

const NullValue = null;
if (NullValue) {
  console.log("null is the truety vlaue");
} else {
  console.log("null is  falsey value ");
}

// varibale = undefined ==> falsey vlauer
const UndefinedValue = undefined;
if (UndefinedValue) {
  console.log("Undefind is the truety vlaue");
} else {
  console.log("undefined is  falsey value ");
}
