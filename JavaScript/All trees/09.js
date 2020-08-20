////// return key
function key(m)
{
//var m=' k="denotation" v="park" '
var firstvariable='k="'; 
var secondvariable='" v='

var testRE= m.match(new RegExp(firstvariable + "(.*)" + secondvariable));

if (testRE && testRE.length > 1)  return testRE[1];     //RegEx has found key so return it one entry
                                                      
    return("");   //else return empty key
    
}
/////return value

function value(m)
{
//var m=' k="denotation" v="park" '
var firstvariable='v="'; 
var secondvariable='"'

var testRE= m.match(new RegExp(firstvariable + "(.*)" + secondvariable));

if (testRE && testRE.length > 1)  return testRE[1];     //RegEx has found key so return it one entry
                                                      
    return("");   //else return empty key    
}





