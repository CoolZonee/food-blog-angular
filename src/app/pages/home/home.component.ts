import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList, ɵɵsetComponentScope } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("articleCard") private articleCard!: ElementRef;
  @ViewChildren("slideShow") private slideShow!: QueryList<any>;
  @ViewChildren("dot") private dot!: QueryList<any>;
  slideShowArr: ElementRef[] = [];
  dotArr: ElementRef[] = [];
  selectedSlide: number = 0;
  timer: any;
  constructor() { }

  ngOnInit(): void {
    // this.refreshSlide(this.selectedSlide);
  }

  ngAfterViewInit() {
    this.slideShowArr = this.slideShow.toArray();
    this.dotArr = this.dot.toArray();
    this.refreshSlide();
  }

  refreshSlide() {
    if (this.selectedSlide > this.slideShowArr.length - 1) {
      this.selectedSlide = 0
    };
    if (this.selectedSlide < 0) {
      this.selectedSlide = this.slideShowArr.length - 1
    };
    this.slideShowArr.forEach(slide => {
      slide.nativeElement.style.display = "none";
    });
    this.dotArr.forEach(dot => {
      dot.nativeElement.className = "";
    });
    console.log(this.dotArr);
    this.slideShowArr[this.selectedSlide].nativeElement.style.display = "flex";
    this.dotArr[this.selectedSlide].nativeElement.className += "intro__dot__active";
    this.timer = setTimeout(() => {
      this.selectedSlide += 1;
      this.refreshSlide();
    }, 5000);
  }

  introPrevious() {
    clearTimeout(this.timer);
    this.selectedSlide -= 1;
    this.refreshSlide();
  }
  
  introNext() {
    clearTimeout(this.timer);
    this.selectedSlide += 1;
    this.refreshSlide();
  }

  chgSlide(index: number) {
    clearTimeout(this.timer);
    this.selectedSlide = index;
    this.refreshSlide();
  }

  articleMoveLeft() {
    this.articleCard.nativeElement.scrollBy(-350, 0);
  }
  
  articleMoveRight() {
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

  slides = [
    {
      id: 1,
      title: 'home_bg1.jpg'
    },
    {
      id: 2,
      title: 'home_bg2.jpg'
    }
  ]
}
