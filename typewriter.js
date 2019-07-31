// setTimeout(()
// Wrong code:
// const sentence = "hello there from lighthouse labs";
// let pause = function(sentence) {
//   let pauseTime = 0;
//   for (let i = 1; i < sentence.length; i++) {
//     pauseTime += 50;
// };
// }
// setTimeout(() => {
//   console.log(pause(sentence));
//   }, pauseTime);


  let sentence = "hello there from lighthouse labs";
  let startTime = 0;
  let pause = 50;
  for (let i = 0; i<sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, startTime += pause);
  }
  setTimeout(() => {
  process.stdout.write("\n");
  }, startTime);


// Original:
// const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 1000)
// };