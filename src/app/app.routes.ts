import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { HomeComponent } from './layouts/home/home.component';
import { TimelineComponent } from './routes/timeline/timeline.component';

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        children: [
            { 
                path: "login",
                component: LoginComponent 
            },
            { 
                path: "register", 
                component: RegisterComponent 
            },
        ]
    },
    {
        path: "",
        component: HomeComponent,
        children: [
            {
                path: "posts",
                component: TimelineComponent
            }
        ] 
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/posts"
    }
];
