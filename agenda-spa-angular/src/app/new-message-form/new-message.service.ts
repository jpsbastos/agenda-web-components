import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Contact} from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class NewMessageService {
  public selectedContact = new Subject<Contact>();
}
