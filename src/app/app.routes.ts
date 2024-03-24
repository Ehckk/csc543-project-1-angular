import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { HomeComponent } from './layouts/home/home.component';
import { TimelineComponent } from './routes/timeline/timeline.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';

export const routes: Routes = [
    {
        path: "",
        component: AuthComponent,
        children: [
            { 
                path: "login",
                component: LoginFormComponent 
            },
            { 
                path: "register", 
                component: RegisterFormComponent
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
