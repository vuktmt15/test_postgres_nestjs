import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from './bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && comparePassword(password, user.password)) {
      const payload = { name: user.username, sub: user.id };

      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
