import { provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HotelDetailsComponent } from './components/hotel-details/hotel-details.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent } ,
      { path: 'register', component: RegisterComponent },
      { path: 'search', component: SearchComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'hotel-details',component: HotelDetailsComponent },
      { path: 'client-profile',component: ClientProfileComponent },
    ])
  ]
};
