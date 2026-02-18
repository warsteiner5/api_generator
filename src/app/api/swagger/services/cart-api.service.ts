/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { cartAddCartItem } from '../fn/cart/cart-add-cart-item';
import { CartAddCartItem$Params } from '../fn/cart/cart-add-cart-item';
import { cartCheckItemsBySupplier } from '../fn/cart/cart-check-items-by-supplier';
import { CartCheckItemsBySupplier$Params } from '../fn/cart/cart-check-items-by-supplier';
import { cartDeleteCartItem } from '../fn/cart/cart-delete-cart-item';
import { CartDeleteCartItem$Params } from '../fn/cart/cart-delete-cart-item';
import { cartDeleteClientCarts } from '../fn/cart/cart-delete-client-carts';
import { CartDeleteClientCarts$Params } from '../fn/cart/cart-delete-client-carts';
import { ApiCartDto } from '../models/api-cart-dto';
import { cartExportCartItemsToExcel } from '../fn/cart/cart-export-cart-items-to-excel';
import { CartExportCartItemsToExcel$Params } from '../fn/cart/cart-export-cart-items-to-excel';
import { cartGetClientCarts } from '../fn/cart/cart-get-client-carts';
import { CartGetClientCarts$Params } from '../fn/cart/cart-get-client-carts';
import { ApiCartItemDto } from '../models/api-cart-item-dto';
import { cartPutItemsBySupplier } from '../fn/cart/cart-put-items-by-supplier';
import { CartPutItemsBySupplier$Params } from '../fn/cart/cart-put-items-by-supplier';
import { cartSendToExternalSystem } from '../fn/cart/cart-send-to-external-system';
import { CartSendToExternalSystem$Params } from '../fn/cart/cart-send-to-external-system';
import { cartUpdateCart } from '../fn/cart/cart-update-cart';
import { CartUpdateCart$Params } from '../fn/cart/cart-update-cart';
import { cartUpdateCartItem } from '../fn/cart/cart-update-cart-item';
import { CartUpdateCartItem$Params } from '../fn/cart/cart-update-cart-item';
import { cartUpdateCartItemProperty } from '../fn/cart/cart-update-cart-item-property';
import { CartUpdateCartItemProperty$Params } from '../fn/cart/cart-update-cart-item-property';
import { cartUpdateCartProperty } from '../fn/cart/cart-update-cart-property';
import { CartUpdateCartProperty$Params } from '../fn/cart/cart-update-cart-property';

@Injectable({ providedIn: 'root' })
export class CartApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `cartGetClientCarts()` */
  static readonly CartGetClientCartsPath = '/bla-bla-vla/carts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartGetClientCarts()` instead.
   *
   * This method doesn't expect any request body.
   */
  cartGetClientCarts$Response(params?: CartGetClientCarts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiCartDto>>> {
    return cartGetClientCarts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartGetClientCarts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cartGetClientCarts(params?: CartGetClientCarts$Params, context?: HttpContext): Observable<Array<ApiCartDto>> {
    return this.cartGetClientCarts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiCartDto>>): Array<ApiCartDto> => r.body)
    );
  }

  /** Path part for operation `cartExportCartItemsToExcel()` */
  static readonly CartExportCartItemsToExcelPath = '/bla-bla-vla/carts/{cartId}/export-excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartExportCartItemsToExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  cartExportCartItemsToExcel$Response(params: CartExportCartItemsToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartExportCartItemsToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartExportCartItemsToExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cartExportCartItemsToExcel(params: CartExportCartItemsToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.cartExportCartItemsToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartUpdateCart()` */
  static readonly CartUpdateCartPath = '/bla-bla-vla/carts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartUpdateCart()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCart$Response(params: CartUpdateCart$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartUpdateCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartUpdateCart$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCart(params: CartUpdateCart$Params, context?: HttpContext): Observable<Blob> {
    return this.cartUpdateCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartUpdateCartProperty()` */
  static readonly CartUpdateCartPropertyPath = '/bla-bla-vla/carts/{id}/{propertyName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartUpdateCartProperty()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCartProperty$Response(params: CartUpdateCartProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartUpdateCartProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartUpdateCartProperty$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCartProperty(params: CartUpdateCartProperty$Params, context?: HttpContext): Observable<Blob> {
    return this.cartUpdateCartProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartUpdateCartItemProperty()` */
  static readonly CartUpdateCartItemPropertyPath = '/bla-bla-vla/cart-items/{cartItemid}/{propertyName}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartUpdateCartItemProperty()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCartItemProperty$Response(params: CartUpdateCartItemProperty$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartUpdateCartItemProperty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartUpdateCartItemProperty$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCartItemProperty(params: CartUpdateCartItemProperty$Params, context?: HttpContext): Observable<Blob> {
    return this.cartUpdateCartItemProperty$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartAddCartItem()` */
  static readonly CartAddCartItemPath = '/bla-bla-vla/cart-items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartAddCartItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartAddCartItem$Response(params?: CartAddCartItem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCartItemDto>> {
    return cartAddCartItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartAddCartItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartAddCartItem(params?: CartAddCartItem$Params, context?: HttpContext): Observable<ApiCartItemDto> {
    return this.cartAddCartItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiCartItemDto>): ApiCartItemDto => r.body)
    );
  }

  /** Path part for operation `cartUpdateCartItem()` */
  static readonly CartUpdateCartItemPath = '/bla-bla-vla/cart-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartUpdateCartItem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCartItem$Response(params: CartUpdateCartItem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartUpdateCartItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartUpdateCartItem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartUpdateCartItem(params: CartUpdateCartItem$Params, context?: HttpContext): Observable<Blob> {
    return this.cartUpdateCartItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartDeleteCartItem()` */
  static readonly CartDeleteCartItemPath = '/bla-bla-vla/cart-items/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartDeleteCartItem()` instead.
   *
   * This method doesn't expect any request body.
   */
  cartDeleteCartItem$Response(params: CartDeleteCartItem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartDeleteCartItem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartDeleteCartItem$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cartDeleteCartItem(params: CartDeleteCartItem$Params, context?: HttpContext): Observable<Blob> {
    return this.cartDeleteCartItem$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartDeleteClientCarts()` */
  static readonly CartDeleteClientCartsPath = '/bla-bla-vla/cart-items/to-delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartDeleteClientCarts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartDeleteClientCarts$Response(params?: CartDeleteClientCarts$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartDeleteClientCarts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartDeleteClientCarts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartDeleteClientCarts(params?: CartDeleteClientCarts$Params, context?: HttpContext): Observable<Blob> {
    return this.cartDeleteClientCarts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartPutItemsBySupplier()` */
  static readonly CartPutItemsBySupplierPath = '/bla-bla-vla/carts/{cartId}/cart-items/by-supplier/{supplierOrganizationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartPutItemsBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartPutItemsBySupplier$Response(params: CartPutItemsBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartPutItemsBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartPutItemsBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartPutItemsBySupplier(params: CartPutItemsBySupplier$Params, context?: HttpContext): Observable<Blob> {
    return this.cartPutItemsBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartCheckItemsBySupplier()` */
  static readonly CartCheckItemsBySupplierPath = '/bla-bla-vla/carts/{cartId}/cart-items/by-supplier/{supplierOrganizationId}/isChecked';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartCheckItemsBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartCheckItemsBySupplier$Response(params: CartCheckItemsBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartCheckItemsBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartCheckItemsBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartCheckItemsBySupplier(params: CartCheckItemsBySupplier$Params, context?: HttpContext): Observable<Blob> {
    return this.cartCheckItemsBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `cartSendToExternalSystem()` */
  static readonly CartSendToExternalSystemPath = '/bla-bla-vla/carts/to-external-system';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cartSendToExternalSystem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartSendToExternalSystem$Response(params?: CartSendToExternalSystem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return cartSendToExternalSystem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cartSendToExternalSystem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cartSendToExternalSystem(params?: CartSendToExternalSystem$Params, context?: HttpContext): Observable<Blob> {
    return this.cartSendToExternalSystem$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
