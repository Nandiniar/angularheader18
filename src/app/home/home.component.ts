import { Component } from '@angular/core';
import { Router,ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
// constructor(private route:ActivatedRoute){

// } // isme bas humare active routes ko register karna hai
// constructor(private route:ActivatedRoute){}

// ngOnInit(){
//   let name=this.route.snapshot.paramMap.get('name');
//   console.log(name)
// }   -- yeh wo wala method hai jab hum data pass karte hai routes ke through

constructor(private router:Router){

}
// gotoProfile(){
// this.router.navigate(['profile'],{queryParams:{name:'Nandini'}
// })
// }     - yeh 2 way hai

}
