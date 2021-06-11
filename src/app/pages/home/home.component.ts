import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild ("articleCard", { static: false }) private articleCard!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  moveLeft() {
    this.articleCard.nativeElement.scrollBy(-350, 0);
  }
  
  moveRight() {
    this.articleCard.nativeElement.scrollBy(350, 0);
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
