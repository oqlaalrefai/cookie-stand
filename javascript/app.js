'use strict';
let hours=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ','8pm '];

let paris ={
    Location:'paris' ,
    Min :20,
    Max:38,
    AvgCookie:2.3,
    total:0,
    hourlySales:[],
    CustomerPerHour : function () {
        return Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
      },
    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let cookiesNUm= Math.ceil(this.CustomerPerHour() * this.AvgCookie);
            this.hourlySales.push(cookiesNUm);
            this.total += cookiesNUm;
            }
        },
        add_content :function(){
            let container=document.getElementById('parent');
            let h2 =document.createElement('h2');
            container.appendChild(h2);
            h2.textContent='paris';
            container.appendChild(h2);
            let list=document.createElement('ul');
            container.appendChild(list);
            for (let i=0;i<hours.length;i++){
                let listItem = document.createElement('li');
                listItem.textContent  =hours[i]+': '+this.hourlySales[i]+' cookies';
                list.appendChild(listItem);
                }
            let listItem = document.createElement('li');
            listItem.textContent  ='Total: '+this.total+' cookies';
            list.appendChild(listItem);
             
             
                }
}
paris.SalesPerHour();
paris.add_content();
let seattle = {
    Location:'seattle' ,
    Min :23,
    Max:65,
    AvgCookie:6.3,
    total:0,
    hourlySales:[],
    CustomerPerHour : function () {
        return Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
      },
    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let cookiesNUm= Math.ceil(this.CustomerPerHour() * this.AvgCookie);
            this.hourlySales.push(cookiesNUm);
            this.total += cookiesNUm;
            }
        },
        add_content :function(){
            let container=document.getElementById('parent');
            let h2 =document.createElement('h2');
            container.appendChild(h2);
            h2.textContent='seattle';
            container.appendChild(h2);
            let list=document.createElement('ul');
            container.appendChild(list);
            for (let i=0;i<hours.length;i++){
                let listItem = document.createElement('li');
                listItem.textContent  =hours[i]+': '+seattle.hourlySales[i]+' cookies';
                list.appendChild(listItem);
                }
            let listItem = document.createElement('li');
            listItem.textContent  ='Total: '+seattle.total+' cookies';
            list.appendChild(listItem);
             
             
                }
}
seattle.SalesPerHour();
seattle.add_content();
let Tokyo ={		
    Location:'Tokyo',
    Min :3,
    Max:24,
    AvgCookie:1.2,
    hourlySales:[],
    total:0,
    CustomerPerHour : function () {
        return Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
      },

    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let cookiesNUm= Math.ceil(this.CustomerPerHour() *this.AvgCookie);
            this.hourlySales.push(cookiesNUm);
            this.total += cookiesNUm;
                }
            },
    add_content :function(){
        let container=document.getElementById('parent');
        let h2 =document.createElement('h2');
        container.appendChild(h2);
        h2.textContent='Tokyo';
        container.appendChild(h2);
        let list=document.createElement('ul');
        container.appendChild(list);
        for (let i=0;i<hours.length;i++){
            let listItem = document.createElement('li');
            listItem.textContent  =hours[i]+': '+this.hourlySales[i]+' cookies';
            list.appendChild(listItem);
            }
        let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.total+' cookies';
        list.appendChild(listItem);
                 
                 
            }
}
Tokyo.SalesPerHour();
Tokyo.add_content();
let Dubai = {
    Location:'Dubai' ,
    Min :11,
    Max:38,
    AvgCookie:3.7,
    hourlySales:[],
    total:0,
    CustomerPerHour : function () {
        return Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
        },
    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let cookiesNUm= Math.ceil(this.CustomerPerHour() *this.AvgCookie);
            this.hourlySales.push(cookiesNUm);
            this.total += cookiesNUm;
                }
            },
    add_content :function(){
        let container=document.getElementById('parent');
        let h2 =document.createElement('h2');
        container.appendChild(h2);
        h2.textContent='Dubai';
        container.appendChild(h2);
        let list=document.createElement('ul');
        container.appendChild(list);
        for (let i=0;i<hours.length;i++){
            let listItem = document.createElement('li');
            listItem.textContent  =hours[i]+': '+this.hourlySales[i]+' cookies';
            list.appendChild(listItem);
            }
        let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.total+' cookies';
        list.appendChild(listItem);
        }
}
Dubai.SalesPerHour();
Dubai.add_content();
let Lima = {
    Location:'Lima' ,
    Min :2,
    Max:16,
    AvgCookie:4.6,
    hourlySales:[],
    total:0,
    CustomerPerHour : function () {
        return Math.floor(Math.random() * (this.Max - this.Min + 1)) + this.Min;
      },
    SalesPerHour :function () {
        for (let i=0;i<hours.length;i++){
            let cookiesNUm= Math.ceil(this.CustomerPerHour() *this.AvgCookie);
            this.hourlySales.push(cookiesNUm);
            this.total += cookiesNUm;
                }
            },
    add_content :function(){
        let container=document.getElementById('parent');
        let h2 =document.createElement('h2');
        container.appendChild(h2);
        h2.textContent='Lima';
        container.appendChild(h2);
        let list=document.createElement('ul');
        container.appendChild(list);
        for (let i=0;i<hours.length;i++){
            let listItem = document.createElement('li');
            listItem.textContent  =hours[i]+': '+this.hourlySales[i]+' cookies';
            list.appendChild(listItem);
            }
        let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+this.total+' cookies';
        list.appendChild(listItem);
         
         
            },
}
Lima.SalesPerHour();
Lima.add_content();