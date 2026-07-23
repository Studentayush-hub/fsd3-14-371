//make three functions with name f1,f2 and f3
const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();
//synchronous call: java script is single threaded and synchronous programming language
//in asynchronous we use eventloop to manage the call stack
//the asynchrous call using timers: 1. set time out 2. set immediate 3. process.next tick 4. set interval