import { Injectable } from '@nestjs/common';
import { Article } from 'src/interfaces/article.interface';

@Injectable()
export class CartService {
  private cart: Article[] = [];

  addElementToCart(article: Article) {
    this.cart.push(article)
  }

  removeElementFromCart(id: string) {
    this.cart = this.cart.filter(cartElement => cartElement.objectId !== id.toString())
  }

  getCart(): Article[] {
    return this.cart
  }
}
