import { Component, Input, OnInit } from '@angular/core';
import { symlinkSync } from 'fs';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() blog:any;
 
  constructor() { }
 
  ngOnInit(): void {
    
    
  }
  

}
