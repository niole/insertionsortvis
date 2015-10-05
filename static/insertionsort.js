function swit(A,i,j) {
  var t = A[i];
  A[i] = A[j];
  A[j] = t;
}

function shift(A,i,j, svg, height, start) {
  if (j >= 0) {
    if (A[i] < A[j]) {
      swit(A,i,j);
      svg.drawsvg(A);
    }
    i = j
    j -= 1
    setTimeout(shift.bind(this, A,i,j, svg, height, start), 10);
  } else {
    setTimeout(insertion.bind(null, A, svg, height, start+1), 10);
  }
}

function insertion(A, svg, height, m) {
  if (A.length > 1) {
      if (m < A.length) {
        var j = m-1;
        shift.call(this,A,m,j,svg,height, m);
      }
  } else {
    svg.drawsvg(A);
    return A;
  }
}
