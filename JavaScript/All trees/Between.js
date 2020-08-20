function Between()
{
  var m1=' k="denotation" v="park" '
  var m2=' k="leaf_type" v="broadleaved" '
  var m3='   k="name" v="Madhuca" '
  var m4=' k="natural" v="tree"   '
 


var firstvariable='v="'; 
var secondvariable='"'


var testRE= m1.match(new RegExp(firstvariable + "(.*)" + secondvariable));

if (testRE && testRE.length > 1) //RegEx has found something and has more than one entry.
{  
    alert(testRE[1]); //is the matched group if found
}

}    


function value()
{
var m=' k="denotation" v="park" '

var firstvariable='v="'; 
var secondvariable='"'

var testRE= m.match(new RegExp(firstvariable + "(.*)" + secondvariable));

if (testRE && testRE.length > 1)  return testRE[1];     //RegEx has found key so return it one entry
                                                      
    return("");   //else return empty key    
}






function key()
{
var m=' k="denotation" v="park" '
var firstvariable='k="'; 
var secondvariable='" v='

var testRE= m.match(new RegExp(firstvariable + "(.*)" + secondvariable));

if (testRE && testRE.length > 1)  return testRE[1];     //RegEx has found key so return it one entry
                                                      
    return("");   //else return empty key
    
}



