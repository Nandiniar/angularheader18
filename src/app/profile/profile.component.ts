import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  userName:string|null="";
constructor(private route:ActivatedRoute){

}
ngOnInit(){
//   this.userName=this.route.snapshot.paramMap.get('name'); yeh way hai jise hum data send karte hai routes ke help se
//  console.log(this.userName) 

// this.route.queryParams.subscribe(params=>{ -- yeh 2 way hai

  
//   this.userName=params['name']   -- yeh 2 way hai
// })
// }
this.route.data.subscribe(data=>{
  this.userName=data['name']
})
}
}
