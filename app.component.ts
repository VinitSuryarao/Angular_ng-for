import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
// Normal List
CityList =["Mumbai", "Pune","Delhi","Banglore","Noida"];

//Object List
Employees =[
  {Name:'Vinit',   Dept:'Match', Post:'Developer'},
  {Name:'Aelvish', Dept:'Match', Post:'Tester'},
  {Name:'Shnakr',  Dept:'Match', Post:'BA'}
]

refreshData():void{
  this.Employees =[
    {Name:'Vinit',   Dept:'Match', Post:'Developer'},
    {Name:'Aelvish', Dept:'Match', Post:'Tester'},
    {Name:'Shnakr',  Dept:'Match', Post:'BA'},
    {Name:'Kabir',  Dept:'Match', Post:'BA'},
    {Name:'Divya',  Dept:'Match', Post:'BA'}
  ]
}

refreshmethod(index:number, Employees:any):string{
  return Employees.Name;
}

}
