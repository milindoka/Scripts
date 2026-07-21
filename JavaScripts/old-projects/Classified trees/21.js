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

function Fillmatrix(keyarray,raw_xml_data,main)///main is 2d array with title keys as first row
{
     var totalkeys=keyarray.length;
     main[0]=new Array(totalkeys);  // Add first row as title row
     for(var j= 0;j<totalkeys;j++)
       { main[0][j]=keyarray[j];    // assign titles 
       }

    var currentrecord=1;                       ///set record index next to title row
    
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


function FillClasseifiedMatrix(source,target)  //// classify from source and fill target
{  var totalkeys=source[0].length;     ///total keys=columns
   //alert(totalkeys);
     target[0]=new Array(totalkeys+1); /// Add first row as title row+last column : count
     for(var j=0;j<totalkeys;j++)
       { target[0][j]=source[0][j];       /// assign titles 
       }
    target[0][totalkeys]="Count";      /// last title


  
  var currentrecord=0;
  for(var i=1;i<source.length;i++)
     { 
       var duplicatefound=false;
       for(var j=0;j<=currentrecord;j++)    /// check duplicate in copied records
          { if(target[j][1].trim()===source[i][1].trim())///duplicate found
               { duplicatefound=true; target[j][totalkeys]++; break; }

           }
       if(duplicatefound) continue;
       //else create new record with count 1
       currentrecord++;
       target[currentrecord]=new Array(totalkeys+1);
       for(var k=0;k<totalkeys;k++)
        { 
         target[currentrecord][k]=source[i][k];   /// copy all columns 
        }
       target[currentrecord][totalkeys]=1;        ///last column entry count=1 
     }
  
//alert(target.length);
}




/// Display table from matrix
function DisplayMatrixInTable(rn,cn,ar)
{
  
 for(var r=0;r<rn;r++)
  {
   var xx=document.getElementById('myTable').insertRow(r);

  var z=  xx.insertCell(0);
     //y.innerHTML="Row-"+r+" Column-"+c; 
    if(r===0) z.innerHTML="Sr"; else z.innerHTML=r.toString();   
         var ins=1   
   for(var c=0;c<cn;c++)  
    { if(c!==0 && c!==1 && c!==3 && c!==13) continue;
       
     var y=  xx.insertCell(ins);ins++;
     //y.innerHTML="Row-"+r+" Column-"+c; 
     y.innerHTML=ar[r][c]; 
     }

   }
   
}




