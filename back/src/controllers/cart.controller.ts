import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes } from "@nestjs/common";
import { Article } from "src/interfaces/article.interface";
import { JoiValidationPipe } from "src/pipes/validation.pipe";
import { CartService } from "src/services/cart.service";
import * as Joi from 'joi';
import { AddArticleToCartDto } from "src/dto/addArticleToCart.dto";

const addArticleSchema = Joi.object({
  objectId: Joi.number().required(),
  name: Joi.string().required(),
  price: Joi.number().required()
})

@Controller("cart")
export class CartController {
  constructor(private cartService: CartService) { }

  @Get("")
  async GetCart(): Promise<Article[]> {
    return this.cartService.getCart()
  }

  @Post("")
  @UsePipes(new JoiValidationPipe(addArticleSchema))
  async addElementToCart(@Body() addArticleToCartDto: AddArticleToCartDto) {
    this.cartService.addElementToCart(addArticleToCartDto)
    return "element Added"
  }

  @Delete("/:id")
  async deleteElementFromCart(@Param("id", ParseIntPipe) id) {
    this.cartService.removeElementFromCart(id)
  }

}