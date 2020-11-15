// ERROR 01 - Corrected htt to http in require
// var http = require('htt');
var http = require('http');
// ERROR 02 - Corrected spelling of function
// var myname = functon(){
var myname = function(){
    // ERROR 10 - Changed console.log to return string
    // console.log ("Here is my IP address");
  return "Here is my IP address";
}
// ERROR 03 - Corrected function by adding async
// function callHttpbi() {
// ERROR 07 - Corrected function by changing spelling of Httpbi to Httpbin
// function callHttpbi() {
async function callHttpbin() {
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      myips = result.origin;
      // ERROR 08 - Corrected resolve to include myips variable
      // resolve();
      resolve(myips);
     });
     }
    );
});

let result = await promise;
// ERROR 09 - Corrected results variable to return results from function
// result;
return result;
}
// ERROR 04 - Corrected function executeAsyncTask and added async to make function asynchronous
// function executeAsyncTask(){
async function executeAsyncTask(){
  const valueA =  await callHttpbin()
  const valueB = myname();
  console.log(valueB+" "+valueA)
  // Output Here is my IP address 149.24.160.1, 149.24.160.1
  // ERROR 05 - Correct executeAsynTask adding in } as function was not closed
}
// ERROR 06 - Added in function call of executeAsyncTask
executeAsyncTask();