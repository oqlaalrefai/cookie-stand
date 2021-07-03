"use strict";

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
function random(min,max)
{
  return  Math.floor(Math.random() * (max - min + 1)) + min;

}


let storedCreatedObj = [];
function cookies(name,min, max, Avg) {
this.name=name;
this.min=min;
this.max=max;
this.Avg=Avg;
this.cookieTotal=0;
this.customers = [];
this.allcookies=[];
this.total=[];
this. hourlySales= [];

storedCreatedObj.push(this);

}




cookies.prototype.cust = function(){
  
  for(let i = 0; i < hours.length; i++){
    this.customers.push(random(this.min,this.max));
    
    
  }
  
}

cookies.prototype.calccookies=function(){
  for(let i = 0; i < hours.length; i++){
    
    this.allcookies.push(Math.floor(this.Avg*this.customers[i]));

    this.cookieTotal += this.allcookies[i];

  }
}

let Seattle = new cookies ('Seattle',23,65,6.3,0);
let Tokyo =new cookies('Tokyo',3,24,1.2,0);
  let Dubai =new cookies('Dubai',11,38,3.7,0);
  let Paris =new cookies('PAris',20,38,2.3,0);
  let Lima =new cookies('Lima',2,16,4.6,0);  
  console.log( storedCreatedObj);




let parent = document.getElementById('table');
console.log(parent);
let tableEl = document.createElement('table');
parent.appendChild(tableEl);

 
function makeheader (){

  let headingRow = document.createElement('tr');
 tableEl.appendChild(headingRow);


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



cookies.prototype.render =function(){
let drow = document.createElement('tr');
tableEl.appendChild(drow);


let namdata =document.createElement('td');
drow.appendChild(namdata);
namdata.textContent=this.name;


for (let i = 0; i < hours.length; i++) {
  let tabeldata =document.createElement('td');
  drow.appendChild(tabeldata); 
tabeldata.textContent=this.allcookies[i];

}
let totalday =document.createElement('td');
drow.appendChild(totalday);
totalday.textContent=this.cookieTotal;
}


for(let i = 0; i < storedCreatedObj.length; i++){
  storedCreatedObj[i].cust(); 
  storedCreatedObj[i].calccookies();
  storedCreatedObj[i].render();
}
console.log
let footerrow =document.createElement('tr');
function makefooter(){

tableEl.appendChild(footerrow);
let footerht =document.createElement('td');
footerrow.appendChild(footerht);
footerht.textContent='Total';


    let megaTotal = 0;
for (let i = 0; i < hours.length; i++) {
    let sum = 0;
    for (var j = 0; j < storedCreatedObj.length; j++) {
      sum += storedCreatedObj[j].allcookies[i];
    }

    megaTotal += sum;

    console.log(sum);

    let tabeldata = document.createElement('td');
    footerrow.appendChild(tabeldata);
    tabeldata.textContent = sum;
  
  }
  let finaltd = document.createElement('td');
  footerrow.appendChild(finaltd);
  finaltd.textContent=megaTotal;
}
makefooter();
let formwork = document.getElementById('instance');
formwork.addEventListener('submit',handleSubmit);
function handleSubmit(event){
  
  event.preventDefault();

  console.log(event);
  let location =event.target.location.value;
console.log(location);

  let min = parseInt(event.target.min.value);
  console.log(min);
  let max = parseInt(event.target.max.value)
  console.log(max);


  let avg =parseFloat(event.target.Avg.value)
 
  console.log(avg);
  let new_store = new  cookies(location,min,max,avg,);
  
new_store.cust();
new_store.calccookies();
new_store.render();
footerrow.textContent='';
makefooter();
}