"use strict";

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/*
Location 1
*/

//random function 

function random(min,max)
{
  return  Math.floor(Math.random() * (max - min + 1)) + min;

}


let storedCreatedObj = [];//shope array
//constractour shop
function salmonecookies(name,minCust, maxCust, avgSale) {
this.name=name;
this.minCust=minCust;
this.maxCust=maxCust;
this.avgSale=avgSale;
this.cookieTotal=0;
this.calccust = [];
this.cookiesech=[];
this.total=[];
this. hourlySales= [];//customer eachour
// sales cookiesechhour
storedCreatedObj.push(this);

}



//calculate customer hour
salmonecookies.prototype.cust= function(){
  
  for(let i = 0; i < hours.length; i++){
    this.calccust.push(random(this.minCust,this.maxCust));
    
    
  }
  
}
//calculate cookies
salmonecookies.prototype.calccookies=function(){
  for(let i = 0; i < hours.length; i++){
    
    this.cookiesech.push(Math.floor(this.avgSale*this.calccust[i]));
    //this.cookieTotal+=this.cookiesech[i];
    this.cookieTotal += this.cookiesech[i];

  }
}

let Seattle = new salmonecookies ('Seattle',23,65,6.3,0);
let Tokyo =new salmonecookies('Tokyo',3,24,1.2,0);
  let Dubai =new salmonecookies('Dubai',11,38,3.7,0);
  let Paris =new salmonecookies('PAris',20,38,2.3,0);
  let Lima =new salmonecookies('Lima',2,16,4.6,0);  
  console.log( storedCreatedObj);



// html
let parent = document.getElementById('creatTable');
console.log(parent);
let tableEl = document.createElement('table');
parent.appendChild(tableEl);

 // render function
function makeheader (){
//creat head global
  let headingRow = document.createElement('tr');
 tableEl.appendChild(headingRow);

//creat th
 let nameData = document.createElement('th');
 headingRow.appendChild(nameData);
 nameData.textContent='name';
 
 for (let i = 0; i < hours.length; i++) {
let thlement = document.createElement('th');
headingRow.appendChild(thlement);  
thlement.textContent= hours[i]; 

 }
 let thlement2 = document.createElement('th');
headingRow.appendChild(thlement2);  
thlement2.textContent= 'Daily total'; 

}

makeheader();

//prototypefunction

salmonecookies.prototype.render =function(){
let drow = document.createElement('tr');
tableEl.appendChild(drow);

//name location
let namdata =document.createElement('td');
drow.appendChild(namdata);
namdata.textContent=this.name;

//cookies data
for (let i = 0; i < hours.length; i++) {
  let tdel =document.createElement('td');
  drow.appendChild(tdel); 
tdel.textContent=this.cookiesech[i];

}
let totalday =document.createElement('td');
drow.appendChild(totalday);
totalday.textContent=this.cookieTotal;
}

// for loop to call the functions 
for(let i = 0; i < storedCreatedObj.length; i++){
  storedCreatedObj[i].cust(); //calculate customer 
  storedCreatedObj[i].calccookies();///calculate cookies
  storedCreatedObj[i].render();// render
}
console.log

function makefooter(){
  let footerrow =document.createElement('tr');
tableEl.appendChild(footerrow);
let footerht =document.createElement('td');
footerrow.appendChild(footerht);
footerht.textContent='Total';

//mega total
    let megaTotal = 0;
for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (var j = 0; j < storedCreatedObj.length; j++) {
      sum += storedCreatedObj[j].cookiesech[i];
    }

    megaTotal += sum;

    console.log(sum);
    // let trEl=document.createElement("tr");
    // megaTotal += sum;  
    let tdEl = document.createElement('td');
    footerrow.appendChild(tdEl);
    tdEl.textContent = sum;
  
  }
  let finaltd = document.createElement('td');
  footerrow.appendChild(finaltd);
  finaltd.textContent=megaTotal;
}
makefooter();
function addNewStore(event){
  event.preventDefault();
  let newStore = event.target.newstorename.value;
  let newMin = event.target.min.value;
  let newMax = event.target.max.value;
  let newAvg = event.target.avg.value;

  let newStoreAdd = new StoreSales(newMin, newMax, newAvg, newStore);
console.log(newStoreAdd)


}