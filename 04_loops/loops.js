function repeat(str,times){
  var longstr = "";
  for (var i=0; i<times; i++){
      longstr = longstr+str;
  }
  return longstr;
}

function sum(arr) {
    var summary = 0;
    for (var i = 0; i<arr.length; i++) {
        summary += arr[i];
    }
    return summary;
}

function gridGenerator(dim){
    var fullgrid = "";
    var hgrid = "";
    for (var i=0; i<dim; i++){
        for (var j=0; j<dim; j++){
            if((i%2===0 && j%2===0) || (i%2!==0 && j%2!==0) ) {
              hgrid += "#";  
            } else {
              hgrid += " ";
              console.log(i);
              console.log(j);
              console.log(hgrid);
            }
        }
        fullgrid = fullgrid + hgrid + "\n";
        hgrid = "";
    }
    return fullgrid;
}

function largestTriplet(num){
    var a = 0;
    var b = 0;
    var c = 0;
    for (var k=num; k>1; k--){
        for (var i=num; i>1; i--){
            for (var j=num; j>1; j--){
                if(i*i + j*j == k*k){
                    if(i>a && j>b) {
                        a = j;
                        b = i;
                        c = k;
                    }    
                }
            }
        }
    }
    return [a,b,c];
}
