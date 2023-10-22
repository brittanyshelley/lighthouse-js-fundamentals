const packingList = [
  "bowls",
  "plates",
  "pots",
  "pans",
  "eating utensils",
  "glasses",
  "cups",
  "cooking utensils",
];

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}

// other way to solve
const packingList = [
  "bowls",
  "plates",
  "pots",
  "pans",
  "eating utensils",
  "glasses",
  "cups",
  "cooking utensils",
];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}
// If you run this code, you can see that the program reminds you to pack all the items in your kitchen. Looking more deeply into the code, this works because you're declaring a counter variable called i (short for "index") that starts at 0, and increments by 1 at every step of a loop until it matches the length of your array, that is packingList. You might remember that to access an item in an array you index it.
// packingList[3];
// Only you want to index every item, and so you've built a loop that increments an index variable i, which you can use to look into packingList one item at a time.

