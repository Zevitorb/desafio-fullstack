import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  numbers: number[];
  emails: string[];
  company: string;
  description: string;
  userId: string;

  constructor() {
    this.id = randomUUID();
  }
}
