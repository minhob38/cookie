import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // /**
  //  * @description cookie 발급
  //  */
  // @Post('api/cookie')
  // postCookie(@Res({ passthrough: true }) res: Response): string {
  //   res.cookie('my-cookie', 'cookie value :)', {
  //     // domain: 'vos.land:3000',
  //     // secure: true,
  //     // sameSite: 'none',
  //     httpOnly: true,
  //   });

  //   return 'cookie created';
  // }

  /**
   * @description cookie 발급
   */
  @Post('api/cookie')
  postCookie(@Res({ passthrough: true }) res: Response): string {
    res.cookie('my-cookie', 'cookie value :)', {
      // domain: 'vos.land:3000',
      secure: true,
      sameSite: 'none',
      httpOnly: true,
    });

    return 'cookie created';
  }

  /**
   * @description cookie 체크
   */
  @Get('api/cookie')
  checkCookie(
    @Req() request: Request,
    @Res({ passthrough: true }) res: Response,
  ): string {
    // console.log(request);
    console.log(request.headers['referer']);
    console.log(request.cookies);
    console.log(request.cookies['my-cookie']);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    return 'cookie checked';
  }
}
