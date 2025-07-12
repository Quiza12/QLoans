import { Component, OnInit } from '@angular/core';
import { AzureService } from '../../shared/services/azure.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'qloans-app-contact',
    templateUrl: './qloans.contact.component.html',
    styleUrls: ['./qloans.contact.component.scss']
})

export class QLoansContactComponent implements OnInit {
  focus: any;
  focus1: any;
  contactForm: FormGroup;

  submitted = false;
  nameRequired = false;
  emailRequired = false;
  emailValidFormat = false;
  loading = false;

  nameCss = '';
  emailCss = '';

  formControlSuccessCss = 'border-success';
  formControlFailureCss = 'border-danger';

  constructor(private builder: FormBuilder, private azureSevice: AzureService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      phone: new FormControl(''),
      message: new FormControl(''),
    })
  }

  onSubmit() {
    this.submitted = true;
    
    this.clearPreviousFormStyles();
    this.validateName();
    this.validateEmail();

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    this.azureSevice.postData(this.contactForm.value).subscribe({
      next: (v) => this.routeResult("success", "Successful call"),
      error: (e) => this.routeResult("failure", e.message),
    })
  }

  clearPreviousFormStyles() {
    this.nameRequired = false;
    this.emailRequired = false;
    this.emailValidFormat = false;

    this.nameCss = '';
    this.emailCss = '';
  }
    
  validateName() {
    if (this.contactForm.controls['name'].errors && this.contactForm.controls['name'].errors.required == true) {
      this.nameRequired = true;
      this.nameCss = this.formControlFailureCss;
    } else {
      this.nameCss = this.formControlSuccessCss;
    }
  }

  validateEmail() {
    if (this.contactForm.controls['email'].errors) {
      if (this.contactForm.controls['email'].errors.required == true) {
        this.emailRequired = true;
        this.emailCss = this.formControlFailureCss;
      }
      if (this.contactForm.controls['email'].errors.email == true) {
        this.emailValidFormat = true;
        this.emailCss = this.formControlFailureCss;
      }
    } else {
      this.emailCss = this.formControlSuccessCss;
    }
  }

  routeResult(result: string, message: string) {
    console.log(message)
    this.router.navigate(["/contact", result]);
  }

}