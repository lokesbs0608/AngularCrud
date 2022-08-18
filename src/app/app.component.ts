import { Component } from '@angular/core';
import { StudentList } from '../StudenList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
title = 'my-app';

Studentlist: StudentList[];
open: any;
list:StudentList[];

constructor(){
this.open=false
this.Studentlist=[
    {
      slno:1,
name: 'lokesh',
usn:"1GA17EC417",
branch:"ECE"
  },
  {
    slno:2,
    name: 'Kiran',
    usn:"1GA17EC418",
    branch:"ECE"
      },
      {
        slno:3,
        name: 'Kiran',
        usn:"1GA17EC415",
        branch:"MECH"
          },
          {
            slno:3,
            name: 'Kiran',
            usn:"1GA17EC415",
            branch:"MECH"
              },
              {
                slno:3,
                name: 'Kiran',
                usn:"1GA17EC415",
                branch:"MECH"
                  },

                  {
                    slno:3,
                    name: 'Kiran',
                    usn:"1GA17EC415",
                    branch:"MECH"
                      },
                      {
                        slno:3,
                        name: 'Kiran',
                        usn:"1GA17EC415",
                        branch:"MECH"
                          },
]

}
onDel(list:StudentList|unknown){
  const index=this.Studentlist.findIndex(list)
  console.log(index,">>>>>");
  this.Studentlist.splice(index,1)
}
onEdit(){
  console.log("Edit")
}
onAdd(){
  this.open=true

}
onSubmit(a: any,b: any){
  this.open=false
  console.log(a+b);
}

}
