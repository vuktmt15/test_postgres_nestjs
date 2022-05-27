import { Controller, Get, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUser, RegisterUser } from "./users/users.dto";
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //Post/ Login
  @UseGuards(LocalAuthGuard)
  @ApiTags('Login')
  @ApiBody({ type: LoginUser })
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  //Post/ Register
  @ApiTags('Register')
  @ApiBody({ type: LoginUser })
  @Post('register')
  register(@Body() user: RegisterUser): any {
    return this.userService.create(user);
  }
}
