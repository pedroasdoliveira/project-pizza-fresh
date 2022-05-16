import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! \n Please check http://localhosto:3100/api for Swagger docs...';
  }
}
