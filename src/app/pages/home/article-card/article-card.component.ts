import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'div[app-article-card]',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input('articleObj') article!: any;
  constructor() { }

  ngOnInit(): void {
  }

  
}
