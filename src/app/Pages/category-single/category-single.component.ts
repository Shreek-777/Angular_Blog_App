import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-category-single',
  templateUrl: './category-single.component.html',
  styleUrls: ['./category-single.component.css']
})
export class CategorySingleComponent implements OnInit {

  categoryArray:Array<Object>;

  constructor( private categoryService:CategoriesService) { }
  

  ngOnInit(): void {
   
  }



}
