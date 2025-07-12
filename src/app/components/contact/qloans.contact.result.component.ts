import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'qloans-app-contact-result',
    templateUrl: './qloans.contact.result.component.html',
    styleUrls: ['./qloans.contact.component.scss']
})

export class QLoansContactResultComponent implements OnInit {
  focus: any;
  focus1: any;
  result: string;

  header: string;
  image: string;
  firstMessage: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.result = this.activatedRoute.snapshot.paramMap.get("result");
    this.determineResponse();
  }

  determineResponse() {
    if (this.result === "success") {
      this.header = "Thanks for contacting us";
      this.image = "assets/img/contact/success.svg";
      this.firstMessage = "We\'ll be in touch soon.";
    } else {
      this.header = "Uh Oh!";
      this.image = "assets/img/contact/error.svg";
      this.firstMessage = "Something\'s gone wrong. Please email us at david@qloans.net.au instead.";
    }
  }

}
