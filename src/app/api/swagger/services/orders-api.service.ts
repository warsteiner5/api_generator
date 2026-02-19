/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto } from '../models/api-market-json-result-of-list-of-market-order-agreement-history-dto';
import { ApiMarketJsonResultOfMarketOrderAgreementHistoryDto } from '../models/api-market-json-result-of-market-order-agreement-history-dto';
import { ApiMarketJsonResultOfMarketOrderViewDto } from '../models/api-market-json-result-of-market-order-view-dto';
import { ApiMarketJsonResultOfOrderFromCartCreatedInfoAltDto } from '../models/api-market-json-result-of-order-from-cart-created-info';
import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../models/api-market-json-result-of-publish-application-result';
import { ordersAddAgreementByCustomer } from '../fn/orders/orders-add-agreement-by-customer';
import { OrdersAddAgreementByCustomer$Params } from '../fn/orders/orders-add-agreement-by-customer';
import { ordersAddAgreementByParticipant } from '../fn/orders/orders-add-agreement-by-participant';
import { OrdersAddAgreementByParticipant$Params } from '../fn/orders/orders-add-agreement-by-participant';
import { ordersApproveAgreementByCustomer } from '../fn/orders/orders-approve-agreement-by-customer';
import { OrdersApproveAgreementByCustomer$Params } from '../fn/orders/orders-approve-agreement-by-customer';
import { ordersApproveAgreementByParticipant } from '../fn/orders/orders-approve-agreement-by-participant';
import { OrdersApproveAgreementByParticipant$Params } from '../fn/orders/orders-approve-agreement-by-participant';
import { ordersCancel } from '../fn/orders/orders-cancel';
import { OrdersCancel$Params } from '../fn/orders/orders-cancel';
import { ordersCreate } from '../fn/orders/orders-create';
import { OrdersCreate$Params } from '../fn/orders/orders-create';
import { ordersCreateAgreementAndDiscussion } from '../fn/orders/orders-create-agreement-and-discussion';
import { OrdersCreateAgreementAndDiscussion$Params } from '../fn/orders/orders-create-agreement-and-discussion';
import { ordersCreateAndConcludeDealNonElectronicForm } from '../fn/orders/orders-create-and-conclude-deal-non-electronic-form';
import { OrdersCreateAndConcludeDealNonElectronicForm$Params } from '../fn/orders/orders-create-and-conclude-deal-non-electronic-form';
import { ordersCreateByExternalSystem } from '../fn/orders/orders-create-by-external-system';
import { OrdersCreateByExternalSystem$Params } from '../fn/orders/orders-create-by-external-system';
import { ordersCreateFromCart } from '../fn/orders/orders-create-from-cart';
import { OrdersCreateFromCart$Params } from '../fn/orders/orders-create-from-cart';
import { ordersGetAgreementHistory } from '../fn/orders/orders-get-agreement-history';
import { OrdersGetAgreementHistory$Params } from '../fn/orders/orders-get-agreement-history';
import { ordersGetById } from '../fn/orders/orders-get-by-id';
import { OrdersGetById$Params } from '../fn/orders/orders-get-by-id';
import { ordersGetLastAgreementHistory } from '../fn/orders/orders-get-last-agreement-history';
import { OrdersGetLastAgreementHistory$Params } from '../fn/orders/orders-get-last-agreement-history';
import { ordersRejectAgreementByCustomer } from '../fn/orders/orders-reject-agreement-by-customer';
import { OrdersRejectAgreementByCustomer$Params } from '../fn/orders/orders-reject-agreement-by-customer';
import { ordersRejectAgreementByParticipant } from '../fn/orders/orders-reject-agreement-by-participant';
import { OrdersRejectAgreementByParticipant$Params } from '../fn/orders/orders-reject-agreement-by-participant';

@Injectable({ providedIn: 'root' })
export class OrdersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `ordersCreateFromCart()` */
  static readonly OrdersCreateFromCartPath = '/market/api/v1/orders/cart';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreateFromCart()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreateFromCart$Response(params?: OrdersCreateFromCart$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrderFromCartCreatedInfoAltDto>> {
    return ordersCreateFromCart(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersCreateFromCart$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreateFromCart(params?: OrdersCreateFromCart$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrderFromCartCreatedInfoAltDto> {
    return this.ordersCreateFromCart$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrderFromCartCreatedInfoAltDto>): ApiMarketJsonResultOfOrderFromCartCreatedInfoAltDto => r.body)
    );
  }

  /** Path part for operation `ordersCreate()` */
  static readonly OrdersCreatePath = '/market/api/v1/orders';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreate$Response(params?: OrdersCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreate(params?: OrdersCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersCreateByExternalSystem()` */
  static readonly OrdersCreateByExternalSystemPath = '/market/api/v1/orders/create/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreateByExternalSystem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreateByExternalSystem$Response(params?: OrdersCreateByExternalSystem$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersCreateByExternalSystem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersCreateByExternalSystem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreateByExternalSystem(params?: OrdersCreateByExternalSystem$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersCreateByExternalSystem$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersGetById()` */
  static readonly OrdersGetByIdPath = '/market/api/v1/orders/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersGetById$Response(params: OrdersGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrderViewDto>> {
    return ordersGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersGetById(params: OrdersGetById$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrderViewDto> {
    return this.ordersGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrderViewDto>): ApiMarketJsonResultOfMarketOrderViewDto => r.body)
    );
  }

  /** Path part for operation `ordersGetAgreementHistory()` */
  static readonly OrdersGetAgreementHistoryPath = '/market/api/v1/orders/{id}/agreement/history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersGetAgreementHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersGetAgreementHistory$Response(params: OrdersGetAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto>> {
    return ordersGetAgreementHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersGetAgreementHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersGetAgreementHistory(params: OrdersGetAgreementHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto> {
    return this.ordersGetAgreementHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto>): ApiMarketJsonResultOfListOfMarketOrderAgreementHistoryDto => r.body)
    );
  }

  /** Path part for operation `ordersGetLastAgreementHistory()` */
  static readonly OrdersGetLastAgreementHistoryPath = '/market/api/v1/orders/{id}/agreement/last';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersGetLastAgreementHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersGetLastAgreementHistory$Response(params: OrdersGetLastAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrderAgreementHistoryDto>> {
    return ordersGetLastAgreementHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersGetLastAgreementHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersGetLastAgreementHistory(params: OrdersGetLastAgreementHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrderAgreementHistoryDto> {
    return this.ordersGetLastAgreementHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrderAgreementHistoryDto>): ApiMarketJsonResultOfMarketOrderAgreementHistoryDto => r.body)
    );
  }

  /** Path part for operation `ordersAddAgreementByParticipant()` */
  static readonly OrdersAddAgreementByParticipantPath = '/market/api/v1/orders/participants/{id}/agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersAddAgreementByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersAddAgreementByParticipant$Response(params: OrdersAddAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersAddAgreementByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersAddAgreementByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersAddAgreementByParticipant(params: OrdersAddAgreementByParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersAddAgreementByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersApproveAgreementByParticipant()` */
  static readonly OrdersApproveAgreementByParticipantPath = '/market/api/v1/orders/participants/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersApproveAgreementByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersApproveAgreementByParticipant$Response(params?: OrdersApproveAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
    return ordersApproveAgreementByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersApproveAgreementByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersApproveAgreementByParticipant(params?: OrdersApproveAgreementByParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResultAltDto> {
    return this.ordersApproveAgreementByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>): ApiMarketJsonResultOfPublishApplicationResultAltDto => r.body)
    );
  }

  /** Path part for operation `ordersRejectAgreementByParticipant()` */
  static readonly OrdersRejectAgreementByParticipantPath = '/market/api/v1/orders/participants/{id}/agreement/{agreementId}/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersRejectAgreementByParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersRejectAgreementByParticipant$Response(params: OrdersRejectAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersRejectAgreementByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersRejectAgreementByParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersRejectAgreementByParticipant(params: OrdersRejectAgreementByParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersRejectAgreementByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersCancel()` */
  static readonly OrdersCancelPath = '/market/api/v1/orders/customers/{id}/cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCancel()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersCancel$Response(params: OrdersCancel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersCancel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersCancel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersCancel(params: OrdersCancel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersCancel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersAddAgreementByCustomer()` */
  static readonly OrdersAddAgreementByCustomerPath = '/market/api/v1/orders/customers/{id}/agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersAddAgreementByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersAddAgreementByCustomer$Response(params: OrdersAddAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersAddAgreementByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersAddAgreementByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersAddAgreementByCustomer(params: OrdersAddAgreementByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersAddAgreementByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersApproveAgreementByCustomer()` */
  static readonly OrdersApproveAgreementByCustomerPath = '/market/api/v1/orders/customers/{id}/agreement/{agreementId}/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersApproveAgreementByCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersApproveAgreementByCustomer$Response(params: OrdersApproveAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersApproveAgreementByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersApproveAgreementByCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersApproveAgreementByCustomer(params: OrdersApproveAgreementByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersApproveAgreementByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersRejectAgreementByCustomer()` */
  static readonly OrdersRejectAgreementByCustomerPath = '/market/api/v1/orders/customers/{id}/agreement/{agreementId}/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersRejectAgreementByCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersRejectAgreementByCustomer$Response(params: OrdersRejectAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return ordersRejectAgreementByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersRejectAgreementByCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersRejectAgreementByCustomer(params: OrdersRejectAgreementByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.ordersRejectAgreementByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `ordersCreateAgreementAndDiscussion()` */
  static readonly OrdersCreateAgreementAndDiscussionPath = '/market/api/v1/orders/{orderId}/CreateAgreementAndDiscussion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreateAgreementAndDiscussion()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersCreateAgreementAndDiscussion$Response(params: OrdersCreateAgreementAndDiscussion$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return ordersCreateAgreementAndDiscussion(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersCreateAgreementAndDiscussion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  ordersCreateAgreementAndDiscussion(params: OrdersCreateAgreementAndDiscussion$Params, context?: HttpContext): Observable<number> {
    return this.ordersCreateAgreementAndDiscussion$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `ordersCreateAndConcludeDealNonElectronicForm()` */
  static readonly OrdersCreateAndConcludeDealNonElectronicFormPath = '/market/api/v1/orders/CreateAndConcludeDealNonElectronicForm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `ordersCreateAndConcludeDealNonElectronicForm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreateAndConcludeDealNonElectronicForm$Response(params?: OrdersCreateAndConcludeDealNonElectronicForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return ordersCreateAndConcludeDealNonElectronicForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `ordersCreateAndConcludeDealNonElectronicForm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  ordersCreateAndConcludeDealNonElectronicForm(params?: OrdersCreateAndConcludeDealNonElectronicForm$Params, context?: HttpContext): Observable<Blob> {
    return this.ordersCreateAndConcludeDealNonElectronicForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
