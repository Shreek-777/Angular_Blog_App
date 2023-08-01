import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { CategorySingleComponent } from './Pages/category-single/category-single.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { SingleCategoryComponent } from './Pages/single-category/single-category.component';
import { SinglePostComponent } from './Pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './Pages/terms-and-condition/terms-and-condition.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  { path:'category', component:CategorySingleComponent},
  { path:'post', component:SinglePostComponent},
  {path:'about',component:AboutComponent},
  {path:'term-condition', component:TermsAndConditionComponent},
  {path:'contact', component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
