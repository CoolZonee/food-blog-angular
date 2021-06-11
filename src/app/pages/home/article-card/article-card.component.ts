import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  article = [
    {
      id: 1,
      type: 'tips',
      title: 'How to Pick The Perfect Peach',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumt eirmod tempor invidunt ut labore er dolor',
    },
    {
      id: 2,
      type: 'lifestyle',
      title: 'Minimalist Kitchen',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumt eirmod tempor invidunt ut labore er dolor',
    },
    {
      id: 3,
      type: 'recipe',
      title: 'Butternut Squash Soup',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumt eirmod tempor invidunt ut labore er dolor',
    },
    {
      id: 4,
      type: 'recipe',
      title: 'Berries Smoothie',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumt eirmod tempor invidunt ut labore er dolor',
    },
    {
      id: 5,
      type: 'tips',
      title: 'Organise Your Space',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumt eirmod tempor invidunt ut labore er dolor',
    },
  ]
}
