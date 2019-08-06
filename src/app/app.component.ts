import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  private charCountArray:string[]=["Mukesh Kumar singh"];
  private countMap={};
  private arrString:string='';
  private node={name:"mukesh",org:{name:"capgemini",bu:{dcx:"ui developer"},exp:'4.8'}}
  ObjectKeyLevel:any[]=[];
  wordString:string="Mukesh Kumar singh";
  arrayOfString:string[]=["mukesh kumar singh", "mukehs@capgemini.com", "rajesh@capgemini.com", "mukesh kumar singh", "mukehs@capgemini.com"];
  constructor()
  {

  }
  ngOnInit()
  {
    this.countStringOfCharecter();
    this.ObjectKeyLevel=this.getAllNodeLevelObject(this.node);
  }
  //array of string push
  acceptOfString()
  {
    this.charCountArray.push(this.arrString);
    this.countStringOfCharecter();
  }
  //count the charecter of string array and include space and 
  countStringOfCharecter()
  {
this.charCountArray.forEach(items=> items.split('').forEach(item=>this.countMap[item]=(this.countMap[item]||0)+1))
  }
  //checking of all node level object using recursive function
  getAllNodeLevelObject(node)
  {
    return Object.keys(node).filter(key => node[key] instanceof Object).map(key => this.getAllNodeLevelObject(node[key]).map(k => k)).reduce((x, y) => x.concat(y), Object.keys(node))
  }
  //Reverse of word of string with split and reverse of method
  reverseStringOfWordSplit()
  {
   return  this.wordString.split(" ").map(function(x) {
    return x.split("").reverse().join("");
}).join(" ");
  }
  //remove duplicate of array of string
  removeDuplicateStringArray()
  {
 return this.arrayOfString.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
     
  }
}
