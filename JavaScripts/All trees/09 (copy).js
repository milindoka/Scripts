////// return key
function key(m)
{
//var m=' k="denotation" v="park" '
var firstvariable='k="'; 
var secondvariable='" v='
///find mid string of two strings
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

function Fillmatrix(keyarray,raw_xml_data,main)///main is 2d array with title keys as first row
{
     var totalkeys=keyarray.length;
     main[0]=new Array(totalkeys);  // Add first row as title row
     for(var j= 0;j<totalkeys;j++)
       { main[0][j]=keyarray[j];    // assign titles 
       }

    var currentrecord=1;                       ///set record index next to tile
    
    main[currentrecord]=new Array(totalkeys);  ///create first empty record,  columns=totalkeys 

     for(var j= 0;j<totalkeys;j++)
       { main[currentrecord][j]=" ";    // initialize first record line 
       }


    //split mytext by nextline = "\n" 
    var myArray = raw_xml_data.split("\n");
     
    for(i=0;i<myArray.length;i++)
     { var res = myArray[i].replace("<", " ");
       var res1 =res.replace(">", " ");   
       var res2 =res1.replace("\\", " ");   ////remove problemetic chars


        if(res2.includes("/node"))
            {  currentrecord++;      ///set record index to next record
               main[currentrecord]=new Array(totalkeys);  ///create empty record,  columns=totalkeys 
               for(var j= 0;j<totalkeys;j++)
                { main[currentrecord][j]=" ";    // initialize record 
                }
               continue;
            } 
      
      var str=key(res2);
      if(str==="") continue;
      var vtr=value(res2);               /// get value for current key
      
     // var found=false;                   /// search appropriate column 
      
      for (var j =0; j < totalkeys; j++)
               {   //var result = string1.localeCinueompare(string2);
                   if(str===keyarray[j])  // found key
                    {  main[currentrecord][j]=vtr;
                        
                     }
          
                }
     }

}


/// ceate table with ki.length columns
/// and copy matrix values
function DisplayMatrixInTable(rn,cn,ar)
{
  
 for(var r=0;r<rn;r++)
  {
   var xx=document.getElementById('myTable').insertRow(r);

  var z=  xx.insertCell(0);
     //y.innerHTML="Row-"+r+" Column-"+c; 
    if(r===0) z.innerHTML="Sr"; else z.innerHTML=r.toString();   
   for(var c=0;c<cn;c++)  
    {
     var y=  xx.insertCell(c+1);
     //y.innerHTML="Row-"+r+" Column-"+c; 
     y.innerHTML=ar[r][c];
     }
   }
   
}




