The Sum of A Range
function range (start, end) { 
  var myArray = [];
  var myvar;
  
  if(start < end){
    if(arguments.length === 2){
    	myvar = 1;
  	}
  	else{
    	myvar = arguments[2];
  	}
    
  	for( var i = start; i <= end ; i = i + myvar){
    		myArray.push(i);
  	}
  }
  else{
    if(arguments.length === 2){
    	myvar = -1;
  	}
  	else{
    	myvar = arguments[2];
  	}
    
    for(var j = start; j >= end; j = j + myvar){
    	myArray.push(j);
    }
  }
  return myArray;
}

function sum(myarray){
    var sum = 0;
	for(var i = 0; i < myarray.length;i++){
    	sum = sum + myarray[i];
    }
  return sum;
}
------------------------------------------------------------------------------------
Reversing an array

function reverseArray(takearray){
  var newArray = [];
	for(var i = 0; i < takearray.length; i++){
    	newArray.unshift(takearray[i]);
    }
  return newArray;          
}

function reverseArrayInPlace(takearray){
  var newArray = [];
  for(var i = 0; i < takearray.length / 2; i ++){
  	var temp = takearray[takearray.length - 1 - i];
    takearray[takearray.length - 1 - i] = takearray[i];
    takearray[i] = temp;
  }
  return takearray;          
}
---------------------------------------------------------------------------------------
A list
function arrayToList(toArray){
	var list = {value: toArray[toArray.length-1],rest:null};
  	for(var i = toArray.length-2; i >= 0; --i){
    	list = {value: toArray[i], rest:list};
    }
  return list;
}

function listToArray(toArray){
  	var toValue = [];
	for (var node = toArray; node; node = node.rest) {
    	toValue.push(node.value);
    }
  return toValue;
}

function prepend (values, list){
	var list = { value: values, rest: list};
  return list;
}

function nth (toList, number){
  	var times = 0;
	for (var node = toList; node; node = node.rest) {
    	if(times === number){
        	return node.value;
        }
     	++times;
    }
}

function deepEqual(first, second){
	if((typeof first == "object" && first != null) && (typeof second == "object" && first != null)){
    	if(Object.keys(first).length != Object.keys(second).length){
        	return false;
        }
        for (var i in first) {
        	if(second.hasOwnProperty(i)){
            	if ( !deepEqual(first[i],second[i]) ){
            		return false;
            	}
            }
            else{
            	return false;
            }
        }
      return true;
    }
  else if ( first === second){ return true; }
  else { return false; }
}
--------------------------------------------------------------------------------------------------------------------
Flattening
var arrays = [[1, 2, 3], [4, 5], [6]];
function reduce(array){
    var newarray = [];
	for(var i = 0; i < array.length;i++){
      	var temp = array[i];
    	for(var j = 0; j < temp.length;j++){
        	newarray.push(temp[j]);
        }
    }
  return newarray;
}
or

console.log(reduce(arrays));
function combine(firstarray,secondarray){
	return firstarray.concat(secondarray);
}
console.log(arrays.reduce.combine);
-----------------------------------------------------------------------------------------------------------------------------
Mother-child age difference
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
function hasKnownMother(person){
	return person.mother in byName;
}

console.log(average(ancestry.filter(hasKnownMother).map(function(person){
  return person.born - byName[person.mother].born;})));
// ¡ú 31.2
----------------------------------------------------------------------------------------------------------------------------
Historical life expentancy

var eachcentury = {};

ancestry.forEach(function(person){
    var age = person.died - person.born;
	var century = Math.ceil(person.died/100);
    if(century in eachcentury){
    	eachcentury[century].push(age);
    }
    else{
    	eachcentury[century] = [];
      	eachcentury[century].push(age);
    }
});

//ancestry.forEach(calculateAgePerCentury(person));

for(i in eachcentury){
	console.log(i + ": " + average(eachcentury[i]));
}
-----------------------------------------------------------------------------------------------------------------------------
   Build a table
function buildTable(data) {
    // Your code here.
     var node = document.createElement("table");
     var tr = document.createElement("tr")
     var headers = Object.keys(data[0]);
     
    
     for (var i=0; i<headers.length; ++i) {
         var header = headers[i];
         var th = document.createElement("th");
         th.appendChild(document.createTextNode(header));
         tr.appendChild(th);
     }
     node.appendChild(tr);
    
     data.forEach(function (row) {
         tr = document.createElement("tr");
         for (var i=0; i<headers.length; ++i) {
             var header = headers[i];
             var td = document.createElement("td");
 
             td.appendChild(document.createTextNode(row[headers])) 
             
             tr.appendChild(td);
         }
         node.appendChild(tr);
     });
        
     return node;
  }
  var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
  document.body.appendChild(buildTable(MOUNTAINS));
