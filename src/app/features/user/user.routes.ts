import { Routes } from "@angular/router";
import { Profile } from "./profile/profile";
import { UserList } from "./user-list/user-list";

export const User_Routes:Routes = [
    {
        path:'',
        component: UserList
    },
    {
        path:'profile',
        component: Profile
    }
]