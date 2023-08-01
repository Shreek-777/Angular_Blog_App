import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { CategoryNavbarComponent } from './Layout/category-navbar/category-navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { SinglePostComponent } from './Pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './Pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { SubscriptionFormComponent } from './Subscription-form/subscription-form/subscription-form.component';
import { CommentFormComponent } from './Comments/comment-form/comment-form.component';
import { CommentListComponent } from './Comments/comment-list/comment-list.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { PostCardComponent } from './Layout/post-card/post-card.component';
import { CategorySingleComponent } from './Pages/category-single/category-single.component';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { FirestoreModule,} from '@angular/fire/firestore'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    HomeComponent,
    PostCardComponent,
    CategorySingleComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
   
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  exports:[],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
