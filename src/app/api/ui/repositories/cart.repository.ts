import { Cart } from '../models/cart.interface';
import { cartAdapter } from '../adapters/models/cart.adapter';
import { CartAddCartItemParams, cartAddCartItemAdapter } from './params/cart-add-cart-item.params';
import { CartApiService } from '../../swagger/services/cart-api.service';
import { CartCheckItemsBySupplierParams, cartCheckItemsBySupplierAdapter } from './params/cart-check-items-by-supplier.params';
import { CartDeleteCartItemParams, cartDeleteCartItemAdapter } from './params/cart-delete-cart-item.params';
import { CartDeleteClientCartsParams, cartDeleteClientCartsAdapter } from './params/cart-delete-client-carts.params';
import { CartExportCartItemsToExcelParams, cartExportCartItemsToExcelAdapter } from './params/cart-export-cart-items-to-excel.params';
import { CartGetClientCartsParams, cartGetClientCartsAdapter } from './params/cart-get-client-carts.params';
import { CartItem } from '../models/cart-item.interface';
import { cartItemAdapter } from '../adapters/models/cart-item.adapter';
import { CartPutItemsBySupplierParams, cartPutItemsBySupplierAdapter } from './params/cart-put-items-by-supplier.params';
import { CartSendToExternalSystemParams, cartSendToExternalSystemAdapter } from './params/cart-send-to-external-system.params';
import { CartUpdateCartItemParams, cartUpdateCartItemAdapter } from './params/cart-update-cart-item.params';
import { CartUpdateCartItemPropertyParams, cartUpdateCartItemPropertyAdapter } from './params/cart-update-cart-item-property.params';
import { CartUpdateCartParams, cartUpdateCartAdapter } from './params/cart-update-cart.params';
import { CartUpdateCartPropertyParams, cartUpdateCartPropertyAdapter } from './params/cart-update-cart-property.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartRepository {
  private readonly _api = inject(CartApiService);

  cartAddCartItem(params?: CartAddCartItemParams): Observable<CartItem> {
    return this._api.cartAddCartItem(cartAddCartItemAdapter(params)).pipe(
      map((res) => cartItemAdapter(res))
    );
  }

  cartCheckItemsBySupplier(params: CartCheckItemsBySupplierParams): Observable<Blob> {
    return this._api.cartCheckItemsBySupplier(cartCheckItemsBySupplierAdapter(params));
  }

  cartDeleteCartItem(params: CartDeleteCartItemParams): Observable<Blob> {
    return this._api.cartDeleteCartItem(cartDeleteCartItemAdapter(params));
  }

  cartDeleteClientCarts(params?: CartDeleteClientCartsParams): Observable<Blob> {
    return this._api.cartDeleteClientCarts(cartDeleteClientCartsAdapter(params));
  }

  cartExportCartItemsToExcel(params: CartExportCartItemsToExcelParams): Observable<Blob> {
    return this._api.cartExportCartItemsToExcel(cartExportCartItemsToExcelAdapter(params));
  }

  cartGetClientCarts(params?: CartGetClientCartsParams): Observable<Cart[]> {
    return this._api.cartGetClientCarts(cartGetClientCartsAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => cartAdapter(item)))
    );
  }

  cartPutItemsBySupplier(params: CartPutItemsBySupplierParams): Observable<Blob> {
    return this._api.cartPutItemsBySupplier(cartPutItemsBySupplierAdapter(params));
  }

  cartSendToExternalSystem(params?: CartSendToExternalSystemParams): Observable<Blob> {
    return this._api.cartSendToExternalSystem(cartSendToExternalSystemAdapter(params));
  }

  cartUpdateCart(params: CartUpdateCartParams): Observable<Blob> {
    return this._api.cartUpdateCart(cartUpdateCartAdapter(params));
  }

  cartUpdateCartItem(params: CartUpdateCartItemParams): Observable<Blob> {
    return this._api.cartUpdateCartItem(cartUpdateCartItemAdapter(params));
  }

  cartUpdateCartItemProperty(params: CartUpdateCartItemPropertyParams): Observable<Blob> {
    return this._api.cartUpdateCartItemProperty(cartUpdateCartItemPropertyAdapter(params));
  }

  cartUpdateCartProperty(params: CartUpdateCartPropertyParams): Observable<Blob> {
    return this._api.cartUpdateCartProperty(cartUpdateCartPropertyAdapter(params));
  }

}
