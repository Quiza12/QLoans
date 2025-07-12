import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../classes/testimonial';
import { Testimonials } from '../../data/testimonials.service';


@Component({
    selector: 'qloans-app-testimonials',
    templateUrl: './qloans.testimonials.component.html',
    styleUrls: ['./qloans.testimonials.component.scss']
})

export class QLoansTestimonialsComponent implements OnInit {
  focus: any;
  focus1: any;
  testimomnials: Testimonial[];

  constructor() { }

  ngOnInit() {
    this.testimomnials = new Testimonials().testimonials;
  }

}
