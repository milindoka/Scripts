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


function FillkeyArray(keyarray,data)
{
    var keycount=2;

    //split mytext by nextline = "\n" 
    var myArray = data.split("\n");
     
    for(i=0;i<myArray.length;i++)
    { var res = myArray[i].replace("<", " ");
      var res1 =res.replace(">", " ");   
      var res2 =res1.replace("\\", " ");   ////remove problemetic chars
      
      var str=key(res2);
      if(str==="") continue;
      var found=false;
      var arrlen = keyarray.length;
      for (var j =0; j < arrlen; j++)
               {   //var result = string1.localeCompare(string2);
                   if(str===keyarray[j])  // key already exists
                    {  found=true; break; }
          
                }

      if(found) continue;

      keyarray[keycount]=str;
      keycount++;
 //     alert(str);  
     }
}




