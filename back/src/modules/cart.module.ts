import { Module } from "@nestjs/common";
import { CartController } from "src/controllers/cart.controller";
import { CartService } from "src/services/cart.service";

@Module({
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService]
})
export class CartModule { }