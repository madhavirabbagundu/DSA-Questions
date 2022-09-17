function runProgram(input) {
    var input = input.trim().split("\n")
    var t =+ input[0]
    var line = 1
    for(var i = 0; i < t; i++){
        var [n,k] = input[line].trim().split(" ").map(Number)
        line++
        var arr = input[line].trim().split(" ").map(Number)
        line++
        // console.log(n,k,arr)
        var res = duplicate(n,k,arr)
        console.log(res)
    }
    
}
function duplicate(n,k,arr){
    var out = "NO"
   var i = 0
   var j = n-1
   while(i < j){
        if(arr[i] === arr[j]){
                // console.log(j-i)
             if((j-i) <= k){
                   return "YES"
                   break;
                  
             }
               i++
               j--
            //   break;
        }
        else if(arr[i] < arr[j]){
            i++
        }
        else{
            j--
        }
        
    }
      return "NO"
}




if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}





