function runProgram(input) {
    var input = input.trim().split("\n")
    var t =+ input[0]
    var line = 1
    for(var i = 0; i < t; i++){
        var n =+ input[line]
        line++
        var str = input[line].trim().split("")
        line++
        // console.log(n,str)
        var res = substring(n,str)
    }
    
}
function substring(n,str){
    var count = 0
    var count1 = 0
    for(var i = 0; i < n; i++){
        for(var j = i; j < n; j++){
            var out = ""
            for(var k = i; k <= j; k++){
                out+=str[k]
            }
            // console.log(out.join(" "))
            if(out === "ba"){
                count++
            }
            if(out === "ab"){
                count1++
            }
        }
    }
    // console.log(count,count1)
    if(count === count1){
        console.log(0)
    }
    else {
        console.log(Math.abs(count-count1))
    }
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





