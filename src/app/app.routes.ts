import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path:'about',
     component:AboutComponent
    },
    {
        path:'login',
        component:LoginComponent

    },{
        path:'contact',
        component:ContactComponent
    },{
        path:'',
        component:HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent,data:{name:
            'Naaa'}
    },
    {
        path:'**', // yeh doublestar means wild card means ke agar upar me se kuch bhi match na kare  toh yeh wale
        component:PageNotFoundComponent
    }
    // 404(isse four o four page bolte hai) page or page not found tab show hota hai jab user wo wala route dekhna chahta hai jo hai he nhi toh uss wale case me default wala show hota hai



    // 3 ways hai jise data ek page se dusre me bhej sakte hai 
    // 1 way - with the help of route link
    // 2 way= ISME BUTTON KE HELP SE DATA BHEJ SAKTE HAI  
    // 3 WAY = ISME AGAR HUME COMMON DATA PASS HONA HOTA HAI yeh app.routes.ts me hoga data 
];
