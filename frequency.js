function runProgram(input) {
    var input = input.trim().split("\n")
    var n =+ input[0]
    var str = input[1].trim().split("").sort()
    var res = string(n,str)
    
}
function string(n,str){
    // console.log(str)
    // str = str.split("").sort()
    var temp = {}
    for(var i = 0; i< n; i++){
        var item = str[i]
        if(temp[item] === undefined){
            temp[item] = 1
        }
        else{
            var pre = temp[item]
            temp[item] = pre+1
        }
    }
    // console.log(temp)
    for(key in temp){
            var out = ""

        out+=key+"-"+temp[key]
            console.log(out)

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





