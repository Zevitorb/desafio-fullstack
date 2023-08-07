import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'User email',
    default: 'jhondoe@mail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    default: 'jhondoe123',
  })
  @IsString()
  password: string;
}
