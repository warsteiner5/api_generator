import { adaptCartItemToUI } from '../adapters/toUI/cart-item.adapter';
import { adaptCartToUI } from '../adapters/toUI/cart.adapter';
import { Cart } from '../models/cart.interface';
import { CartAddCartItemParams, cartAddCartItemParamsAdapter } from './params/cart-add-cart-item.params';
import { CartApiService } from '../../swagger/services/cart-api.service';
import { CartCheckItemsBySupplierParams, cartCheckItemsBySupplierParamsAdapter } from './params/cart-check-items-by-supplier.params';
import { CartDeleteCartItemParams, cartDeleteCartItemParamsAdapter } from './params/cart-delete-cart-item.params';
import { CartDeleteClientCartsParams, cartDeleteClientCartsParamsAdapter } from './params/cart-delete-client-carts.params';
import { CartExportCartItemsToExcelParams, cartExportCartItemsToExcelParamsAdapter } from './params/cart-export-cart-items-to-excel.params';
import { CartGetClientCartsParams, cartGetClientCartsParamsAdapter } from './params/cart-get-client-carts.params';
import { CartItem } from '../models/cart-item.interface';
import { CartPutItemsBySupplierParams, cartPutItemsBySupplierParamsAdapter } from './params/cart-put-items-by-supplier.params';
import { CartSendToExternalSystemParams, cartSendToExternalSystemParamsAdapter } from './params/cart-send-to-external-system.params';
import { CartUpdateCartItemParams, cartUpdateCartItemParamsAdapter } from './params/cart-update-cart-item.params';
import { CartUpdateCartItemPropertyParams, cartUpdateCartItemPropertyParamsAdapter } from './params/cart-update-cart-item-property.params';
import { CartUpdateCartParams, cartUpdateCartParamsAdapter } from './params/cart-update-cart.params';
import { CartUpdateCartPropertyParams, cartUpdateCartPropertyParamsAdapter } from './params/cart-update-cart-property.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartRepository {
  private readonly _api = inject(CartApiService);

  cartAddCartItem(params?: CartAddCartItemParams): Observable<CartItem> {
    return this._api.cartAddCartItem(cartAddCartItemParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCartItemToUI(res))
    );
  }

  cartCheckItemsBySupplier(params: CartCheckItemsBySupplierParams): Observable<Blob> {
    return this._api.cartCheckItemsBySupplier(cartCheckItemsBySupplierParamsAdapter.adapt(params));
  }

  cartDeleteCartItem(params: CartDeleteCartItemParams): Observable<Blob> {
    return this._api.cartDeleteCartItem(cartDeleteCartItemParamsAdapter.adapt(params));
  }

  cartDeleteClientCarts(params?: CartDeleteClientCartsParams): Observable<Blob> {
    return this._api.cartDeleteClientCarts(cartDeleteClientCartsParamsAdapter.adapt(params));
  }

  cartExportCartItemsToExcel(params: CartExportCartItemsToExcelParams): Observable<Blob> {
    return this._api.cartExportCartItemsToExcel(cartExportCartItemsToExcelParamsAdapter.adapt(params));
  }

  cartGetClientCarts(params?: CartGetClientCartsParams): Observable<Cart[]> {
    return this._api.cartGetClientCarts(cartGetClientCartsParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptCartToUI(item)))
    );
  }

  cartPutItemsBySupplier(params: CartPutItemsBySupplierParams): Observable<Blob> {
    return this._api.cartPutItemsBySupplier(cartPutItemsBySupplierParamsAdapter.adapt(params));
  }

  cartSendToExternalSystem(params?: CartSendToExternalSystemParams): Observable<Blob> {
    return this._api.cartSendToExternalSystem(cartSendToExternalSystemParamsAdapter.adapt(params));
  }

  cartUpdateCart(params: CartUpdateCartParams): Observable<Blob> {
    return this._api.cartUpdateCart(cartUpdateCartParamsAdapter.adapt(params));
  }

  cartUpdateCartItem(params: CartUpdateCartItemParams): Observable<Blob> {
    return this._api.cartUpdateCartItem(cartUpdateCartItemParamsAdapter.adapt(params));
  }

  cartUpdateCartItemProperty(params: CartUpdateCartItemPropertyParams): Observable<Blob> {
    return this._api.cartUpdateCartItemProperty(cartUpdateCartItemPropertyParamsAdapter.adapt(params));
  }

  cartUpdateCartProperty(params: CartUpdateCartPropertyParams): Observable<Blob> {
    return this._api.cartUpdateCartProperty(cartUpdateCartPropertyParamsAdapter.adapt(params));
  }

}
