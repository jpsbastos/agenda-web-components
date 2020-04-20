import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';
import {Contact, IContact} from '../models/contact.model';
import {map, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {NewMessageService} from '../new-message-form/new-message.service';

const URL = 'http://www.mocky.io/v2/5e9d8518340000362f6ee735';

@Injectable({
  providedIn: 'root'
})
export class MyContactListService {
  private contactList: Contact[] = [];

  constructor(private httpClient: HttpClient, private newMessageService: NewMessageService) { }

  fetchContacts() : Observable<Contact[]> {
    return this.httpClient.get<IContact[]>(URL).pipe(
      map((data) => data.map(
      (d) => new Contact(d.name, d.avatar, d.contactInfo),
      )),
      tap((contacts) => this.contactList = contacts)
    );
  }

  getContacts(): Contact[] {
    return this.contactList;
  }

  getContactByPosition(position: number): Contact {
    return this.contactList[position];
  }

  deleteContact(position: number): void {
    this.contactList.splice(position, 1);
    this.newMessageService.selectedContact.next(null);
  }

  selectContact(position: number): void {
    this.newMessageService.selectedContact.next(this.getContactByPosition(position));
  }
}
