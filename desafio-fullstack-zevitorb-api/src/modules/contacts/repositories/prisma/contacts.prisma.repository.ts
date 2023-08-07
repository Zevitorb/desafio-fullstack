import { Injectable } from '@nestjs/common';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { ContactsRepository } from '../contacts.repository';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'src/modules/database/prisma.service';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}
  async findByPhone(phone: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { phone },
    });

    return contact;
  }

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, {
      ...data,
    });

    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        company: contact.company,
        description: contact.description,
        userId,
      },
    });

    return newContact;
  }

  async findAll(userId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({ where: { userId } });

    return contacts;
  }

  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { id },
    });

    return contact;
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return contact;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
