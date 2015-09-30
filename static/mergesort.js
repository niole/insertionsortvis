function swit(A,i,j) {
  var t = A[i];
  A[i] = A[j];
  A[j] = t;
}

function shift(A,i,j, svg, height, start) {
  //shift changes variables
  if (j >= 0) {
    if (A[i] < A[j]) {
      swit(A,i,j);
      svg.drawsvg(A);
    }
    setTimeout(shift.bind(A,i-1,j-1, svg, height), 1000);
  }
  setTimeout(insertion.bind(A, svg, height, start+1), 1000);
}

function insertion(A, svg, height, m) {
  if (A.length > 1) {
//    for (var i=1; i<A.length; i++) {
      if (m < A.length) {
        var j = m-1;
        shift(A,m,j,svg,height, m);
      }
//    }
  } else {
    svg.drawsvg(A);
    return A;
  }
}
