import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

import { ConfigComponent } from "./config/config.component";
    import { AddComponent } from './add/add.component';
    import { DelComponent } from "./del/del.component";
    import { EditComponent } from './edit/edit.component';
import { FaultComponent } from "./fault/fault.component";
import { AngmapComponent } from './angmap/angmap.component';
import { MetaComponent } from './meta/meta.component';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'config', component: ConfigComponent },
        { path: 'add', component: AddComponent },
        { path: 'edit', component: EditComponent },
        { path: 'del', component: DelComponent },
    { path: 'fault', component: FaultComponent },
    { path: 'map', component: AngmapComponent },
    { path: 'meta', component: MetaComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);