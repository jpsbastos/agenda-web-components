interface ContactDetails {
  email: string;
  phone: string;
}

export interface IContact {
  name: string;
  avatar: string;
  contactInfo: ContactDetails;
}

export class Contact {
  constructor(name: string, avatar: string, contactInfo: ContactDetails) {
    this.name = name;
    this.avatar = avatar;
    this.contactInfo = contactInfo;
  }

  public name: string;
  public avatar: string;
  public contactInfo: ContactDetails;
}
