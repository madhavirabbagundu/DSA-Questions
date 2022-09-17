function patternOfN(N) {
    var count = 1
    for(var i = 1; i <= N; i++){
        var out = ""
        for(var j = 1; j <= N; j++){
             out += count+ " "
            count++
        }
        // out+="\n"
         console.log(out)

    }

}
