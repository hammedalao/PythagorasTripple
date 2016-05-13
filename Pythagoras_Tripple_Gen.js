// This code will generate any pythagoran tripple given a pair of two numbers.
function GenOppAdjHyp(x,y){
  var a = Math.abs((x*x) - (y*y));
  var b = 2*x*y;
  var c = (x*x) + (y*y);
  return ("Opposite="+ a +";" + "Adjacent="+ b +";" + "Hypotenous="+c);
}
//this function tests for the neccessary conditions
function pyTripple (x,y){
  if (((x > y) && (x == (y+1)))){
    return GenOppAdjHyp(x,y);       
  }
  else if (((y > x) && (y == (x+1)))){
    return GenOppAdjHyp(x,y);
  }
  else
    return ("x and y cant generate pythagoran tripple");
}
