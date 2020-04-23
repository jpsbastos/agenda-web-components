import {Component, OnDestroy, OnInit} from '@angular/core';
import {MyContactListService} from './my-contact-list.service';
import {Subscription} from 'rxjs';
import {Contact} from '../models/contact.model';

@Component({
  selector: 'app-my-contact-list',
  templateUrl: './my-contact-list.component.html',
  styleUrls: ['./my-contact-list.component.scss']
})
export class MyContactListComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private myContactListService: MyContactListService) {
    this.onDeleteContact = this.onDeleteContact.bind(this);
  }

  ngOnInit(): void {
    this.subscription = this.myContactListService.fetchContacts().subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get contactList(): Contact[] {
    return this.myContactListService.getContacts();
  }

  onNameClicked(name: string): void {
    alert(`Chamo-me ${name}!`);
  }

  onDeleteContact(position: number): void {
    this.myContactListService.deleteContact(position);
  }

  onClickContact(position: number): void {
    this.myContactListService.selectContact(position);
  }
}
