import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "testimonials", component: TestimonialsComponent
  },
  {
    path: "portfolio", component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled', 
    scrollPositionRestoration: 'top' // scrolls to top
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
