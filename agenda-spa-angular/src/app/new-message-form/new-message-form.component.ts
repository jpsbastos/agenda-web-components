import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {NewMessageService} from './new-message.service';
import {Contact} from '../models/contact.model';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedContact: Contact;


  constructor(private newMessageService: NewMessageService) {
    this.onSubmit = this.onSubmit.bind(this);
  }

  ngOnInit(): void {
    this.subscription = this.newMessageService.selectedContact.subscribe((selectedContact) => {
      this.selectedContact = selectedContact;
    });
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(formContent: { email: string, subject: string, message: string}): void {
    alert(`Email Details: \n\nTo: ${formContent.email}\nSubject: ${formContent.subject}\nMessage: ${formContent.message}`);
  }
}
