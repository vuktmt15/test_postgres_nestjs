import { ApiProperty } from '@nestjs/swagger';

export class LoginUser {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class RegisterUser {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
