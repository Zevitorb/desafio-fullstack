import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository) {}

  async create(createContactDto: CreateContactDto, userId: string) {
    const findContact = await this.contactsRepository.findByPhone(
      createContactDto.phone,
    );

    if (findContact) {
      throw new ConflictException('Phone already exists');
    }

    const contact = await this.contactsRepository.create(
      createContactDto,
      userId,
    );

    return contact;
  }

  async findAll(userId: string) {
    return await this.contactsRepository.findAll(userId);
  }

  async findOne(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact not found!');
    }

    return findContact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found!');
    }

    return this.contactsRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    const findContact = await this.contactsRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact Not found!');
    }

    return this.contactsRepository.delete(id);
  }
}
