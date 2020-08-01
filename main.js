const fs = require("fs");
const {app, BrowserWindow} = require("electron");
// fs.writeFile("/Users/yukikuwa/Desktop/Ahhhh/test.json", '{"test":1, "hello":5}', (err) => {
//   if(err){
//     console.log(err);
//   } else {
//     console.log("completed");
//   }
// });
// fs.readFile("/Users/yukikuwa/Desktop/Ahhhh/test.json", 'utf-8', (err, data) => {
//   if(err){
//     console.log(err);
//   } else {
//     let jsonTest = data;
//     let obj = JSON.parse(jsonTest);
//     document.write(obj.test);
//     document.write(obj.hello);
//   }
// });
// document.write("\n\n");
// 
// fs.readFile("/Users/yukikuwa/Desktop/Ahhhh/dataSample.json", 'utf-8', (err, data) => {
//   if (err){
//     console.log(err);
//   } else {
//     let jsonTest = data;
//     let obj = JSON.parse(jsonTest);
//     document.write(obj.blocks[0].contents[0].content);
//   }
// });