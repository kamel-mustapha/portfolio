import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Title } from '@angular/platform-browser';
import { animations } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: animations,
})
export class ContactComponent implements OnInit {
  constructor(private server: ServerService, private titleService: Title) {}
  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.titleService.setTitle('Contact | Mustapha Kamel Dine');
  }

  loading: boolean = false;
  message_sent: boolean = false;
  submit_text: boolean = true;

  form_invalid: any = {
    name: false,
    purpose: false,
    message: false,
  };

  contact_me(form: NgForm): void {
    this.loading = true;
    this.submit_text = false;
    this.message_sent = false;

    this.form_invalid = {
      name: false,
      purpose: false,
      message: false,
    };

    if (form.invalid) {
      this.loading = false;
      this.submit_text = true;
      this.check_form_validity(form.value);
    } else {
      this.server.contact(form.value).subscribe((response: any) => {
        if (response.status == 'success') {
          this.loading = false;
          this.message_sent = true;
          setTimeout(() => {
            form.reset();
            this.message_sent = false;
            this.submit_text = true;
          }, 3000);
        }
      });
    }
  }

  check_form_validity(form: any): void {
    for (let key in form) {
      if (form[key].length <= 0) {
        this.form_invalid[key] = true;
      }
    }
  }
}
