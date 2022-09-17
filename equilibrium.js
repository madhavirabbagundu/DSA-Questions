function equilibriumElement(N, arr){
    var out = -1
    var rightsum = 0
    for(var i = 0; i <N; i++){
          var leftsum = 0

        for(var j = 0; j < i; j++){
             leftsum = arr[j]

            for(var k = i+1; k < N; k++){
                rightsum+=arr[k]
            }
         if(leftsum==rightsum){
             out = i
         }

        }
    }
    console.log(out)
    
}
