import { Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { HomeComponent } from './layouts/home/home.component';
import { TimelineComponent } from './routes/timeline/timeline.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';

export const routes: Routes = [
    {
        path: "login",
        component: AuthComponent,
        children: [
            { 
                path: "",
                component: LoginFormComponent 
            },
        ],
    },
    {
        path: "register",
        component: AuthComponent,
        children: [
            { 
                path: "", 
                component: RegisterFormComponent
            },
        ]
    },
    {
        path: "posts",
        component: HomeComponent,
        children: [
            {
                path: "",
                component: TimelineComponent
            }
        ] 
    },
    {
        path: "",
        redirectTo: "posts",
        pathMatch: "full"
    }
];
