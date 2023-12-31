import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { PrismaService } from '../database/prisma.service';
import { ContactsRepository } from './repositories/contacts.repository';
import { ContactsPrismaRepository } from './repositories/prisma/contacts.prisma.repository';

@Module({
  controllers: [ContactsController],
  providers: [
    ContactsService,
    PrismaService,
    {
      provide: ContactsRepository,
      useClass: ContactsPrismaRepository,
    },
  ],
})
export class ContactsModule {}
