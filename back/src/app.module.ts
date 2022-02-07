import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
import { CartModule } from './modules/cart.module';

@Module({
  imports: [CartModule],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: TimeoutInterceptor
  }]
})
export class AppModule { }
