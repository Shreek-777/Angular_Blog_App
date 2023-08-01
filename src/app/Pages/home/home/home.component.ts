import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  featuredPostArray:Array<any>;

  constructor( private posts:PostsService, private categoryService:CategoriesService) { }
  
  // blogName:string="Shree-Blog";

  ngOnInit(): void {
    this.posts.loadData().subscribe(data=>{
    this.featuredPostArray=data;
    // console.log(data.id);
    });

    



    
  }

  
}
