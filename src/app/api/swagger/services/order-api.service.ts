/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiSearchResultOfOrderGridDtoForCustomerAltDto } from '../models/api-api-search-result-of-order-grid-dto-for-customer';
import { ApiExportFilesStatusAltDto } from '../models/api-export-files-status';
import { orderApproveOrderByParticipant } from '../fn/order/order-approve-order-by-participant';
import { OrderApproveOrderByParticipant$Params } from '../fn/order/order-approve-order-by-participant';
import { orderApproveOrderBySupplier } from '../fn/order/order-approve-order-by-supplier';
import { OrderApproveOrderBySupplier$Params } from '../fn/order/order-approve-order-by-supplier';
import { orderCancelOrder } from '../fn/order/order-cancel-order';
import { OrderCancelOrder$Params } from '../fn/order/order-cancel-order';
import { orderExportToExcel } from '../fn/order/order-export-to-excel';
import { OrderExportToExcel$Params } from '../fn/order/order-export-to-excel';
import { orderExportToExcelByFilter } from '../fn/order/order-export-to-excel-by-filter';
import { OrderExportToExcelByFilter$Params } from '../fn/order/order-export-to-excel-by-filter';
import { orderGetFullOrderInfo } from '../fn/order/order-get-full-order-info';
import { OrderGetFullOrderInfo$Params } from '../fn/order/order-get-full-order-info';
import { orderGetFullOrderInfoForReSend } from '../fn/order/order-get-full-order-info-for-re-send';
import { OrderGetFullOrderInfoForReSend$Params } from '../fn/order/order-get-full-order-info-for-re-send';
import { orderGetOrdersForCustomer } from '../fn/order/order-get-orders-for-customer';
import { OrderGetOrdersForCustomer$Params } from '../fn/order/order-get-orders-for-customer';
import { orderGetOrdersForOperator } from '../fn/order/order-get-orders-for-operator';
import { OrderGetOrdersForOperator$Params } from '../fn/order/order-get-orders-for-operator';
import { orderGetOrdersForParticipant } from '../fn/order/order-get-orders-for-participant';
import { OrderGetOrdersForParticipant$Params } from '../fn/order/order-get-orders-for-participant';
import { orderGetSentToParticipantOrderCount } from '../fn/order/order-get-sent-to-participant-order-count';
import { OrderGetSentToParticipantOrderCount$Params } from '../fn/order/order-get-sent-to-participant-order-count';
import { orderLinkAndPublishPublicOfferOrder } from '../fn/order/order-link-and-publish-public-offer-order';
import { OrderLinkAndPublishPublicOfferOrder$Params } from '../fn/order/order-link-and-publish-public-offer-order';
import { orderRejectOrderByParticipant } from '../fn/order/order-reject-order-by-participant';
import { OrderRejectOrderByParticipant$Params } from '../fn/order/order-reject-order-by-participant';
import { orderRejectOrderBySupplier } from '../fn/order/order-reject-order-by-supplier';
import { OrderRejectOrderBySupplier$Params } from '../fn/order/order-reject-order-by-supplier';
import { orderRemoveDraft } from '../fn/order/order-remove-draft';
import { OrderRemoveDraft$Params } from '../fn/order/order-remove-draft';
import { orderSaveAsDraft } from '../fn/order/order-save-as-draft';
import { OrderSaveAsDraft$Params } from '../fn/order/order-save-as-draft';
import { orderSendOrderToParticipantGet } from '../fn/order/order-send-order-to-participant-get';
import { OrderSendOrderToParticipantGet$Params } from '../fn/order/order-send-order-to-participant-get';
import { orderSendOrderToParticipantPost } from '../fn/order/order-send-order-to-participant-post';
import { OrderSendOrderToParticipantPost$Params } from '../fn/order/order-send-order-to-participant-post';
import { ApiOrderViewDto } from '../models/api-order-view-dto';

@Injectable({ providedIn: 'root' })
export class OrderApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `orderGetOrdersForCustomer()` */
  static readonly OrderGetOrdersForCustomerPath = '/api/order/GetOrdersForCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGetOrdersForCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderGetOrdersForCustomer$Response(params?: OrderGetOrdersForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>> {
    return orderGetOrdersForCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGetOrdersForCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderGetOrdersForCustomer(params?: OrderGetOrdersForCustomer$Params, context?: HttpContext): Observable<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto> {
    return this.orderGetOrdersForCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>): ApiApiSearchResultOfOrderGridDtoForCustomerAltDto => r.body)
    );
  }

  /** Path part for operation `orderExportToExcel()` */
  static readonly OrderExportToExcelPath = '/api/order/exporttoexcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderExportToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderExportToExcel$Response(params?: OrderExportToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return orderExportToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderExportToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderExportToExcel(params?: OrderExportToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.orderExportToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `orderExportToExcelByFilter()` */
  static readonly OrderExportToExcelByFilterPath = '/api/order/ExportToExcelByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderExportToExcelByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderExportToExcelByFilter$Response(params?: OrderExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExportFilesStatusAltDto>> {
    return orderExportToExcelByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderExportToExcelByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderExportToExcelByFilter(params?: OrderExportToExcelByFilter$Params, context?: HttpContext): Observable<ApiExportFilesStatusAltDto> {
    return this.orderExportToExcelByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExportFilesStatusAltDto>): ApiExportFilesStatusAltDto => r.body)
    );
  }

  /** Path part for operation `orderGetOrdersForOperator()` */
  static readonly OrderGetOrdersForOperatorPath = '/api/order/getordersforoperator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGetOrdersForOperator()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderGetOrdersForOperator$Response(params?: OrderGetOrdersForOperator$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>> {
    return orderGetOrdersForOperator(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGetOrdersForOperator$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderGetOrdersForOperator(params?: OrderGetOrdersForOperator$Params, context?: HttpContext): Observable<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto> {
    return this.orderGetOrdersForOperator$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>): ApiApiSearchResultOfOrderGridDtoForCustomerAltDto => r.body)
    );
  }

  /** Path part for operation `orderGetOrdersForParticipant()` */
  static readonly OrderGetOrdersForParticipantPath = '/api/order/GetOrdersForParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGetOrdersForParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderGetOrdersForParticipant$Response(params?: OrderGetOrdersForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>> {
    return orderGetOrdersForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGetOrdersForParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderGetOrdersForParticipant(params?: OrderGetOrdersForParticipant$Params, context?: HttpContext): Observable<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto> {
    return this.orderGetOrdersForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfOrderGridDtoForCustomerAltDto>): ApiApiSearchResultOfOrderGridDtoForCustomerAltDto => r.body)
    );
  }

  /** Path part for operation `orderGetFullOrderInfo()` */
  static readonly OrderGetFullOrderInfoPath = '/api/order/{id}/GetFullOrderInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGetFullOrderInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGetFullOrderInfo$Response(params: OrderGetFullOrderInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOrderViewDto>> {
    return orderGetFullOrderInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGetFullOrderInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGetFullOrderInfo(params: OrderGetFullOrderInfo$Params, context?: HttpContext): Observable<ApiOrderViewDto> {
    return this.orderGetFullOrderInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiOrderViewDto>): ApiOrderViewDto => r.body)
    );
  }

  /** Path part for operation `orderGetFullOrderInfoForReSend()` */
  static readonly OrderGetFullOrderInfoForReSendPath = '/api/order/{id}/GetFullOrderInfoForReSend';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGetFullOrderInfoForReSend()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGetFullOrderInfoForReSend$Response(params: OrderGetFullOrderInfoForReSend$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOrderViewDto>> {
    return orderGetFullOrderInfoForReSend(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGetFullOrderInfoForReSend$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGetFullOrderInfoForReSend(params: OrderGetFullOrderInfoForReSend$Params, context?: HttpContext): Observable<ApiOrderViewDto> {
    return this.orderGetFullOrderInfoForReSend$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiOrderViewDto>): ApiOrderViewDto => r.body)
    );
  }

  /** Path part for operation `orderSaveAsDraft()` */
  static readonly OrderSaveAsDraftPath = '/api/order/SaveAsDraft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderSaveAsDraft$Response(params?: OrderSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderSaveAsDraft(params?: OrderSaveAsDraft$Params, context?: HttpContext): Observable<number> {
    return this.orderSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderSendOrderToParticipantPost()` */
  static readonly OrderSendOrderToParticipantPostPath = '/api/order/SendToParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderSendOrderToParticipantPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderSendOrderToParticipantPost$Response(params?: OrderSendOrderToParticipantPost$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderSendOrderToParticipantPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderSendOrderToParticipantPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderSendOrderToParticipantPost(params?: OrderSendOrderToParticipantPost$Params, context?: HttpContext): Observable<number> {
    return this.orderSendOrderToParticipantPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderSendOrderToParticipantGet()` */
  static readonly OrderSendOrderToParticipantGetPath = '/api/order/{orderId}/SendToParticipantById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderSendOrderToParticipantGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderSendOrderToParticipantGet$Response(params: OrderSendOrderToParticipantGet$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderSendOrderToParticipantGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderSendOrderToParticipantGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderSendOrderToParticipantGet(params: OrderSendOrderToParticipantGet$Params, context?: HttpContext): Observable<number> {
    return this.orderSendOrderToParticipantGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderApproveOrderByParticipant()` */
  static readonly OrderApproveOrderByParticipantPath = '/api/order/ApproveByParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderApproveOrderByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderApproveOrderByParticipant$Response(params?: OrderApproveOrderByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderApproveOrderByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderApproveOrderByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderApproveOrderByParticipant(params?: OrderApproveOrderByParticipant$Params, context?: HttpContext): Observable<number> {
    return this.orderApproveOrderByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderApproveOrderBySupplier()` */
  static readonly OrderApproveOrderBySupplierPath = '/api/order/ApproveBySupplier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderApproveOrderBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderApproveOrderBySupplier$Response(params?: OrderApproveOrderBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderApproveOrderBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderApproveOrderBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderApproveOrderBySupplier(params?: OrderApproveOrderBySupplier$Params, context?: HttpContext): Observable<number> {
    return this.orderApproveOrderBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderRejectOrderByParticipant()` */
  static readonly OrderRejectOrderByParticipantPath = '/api/order/RejectByParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderRejectOrderByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderRejectOrderByParticipant$Response(params?: OrderRejectOrderByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderRejectOrderByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderRejectOrderByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderRejectOrderByParticipant(params?: OrderRejectOrderByParticipant$Params, context?: HttpContext): Observable<number> {
    return this.orderRejectOrderByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderRejectOrderBySupplier()` */
  static readonly OrderRejectOrderBySupplierPath = '/api/order/RejectBySupplier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderRejectOrderBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderRejectOrderBySupplier$Response(params?: OrderRejectOrderBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderRejectOrderBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderRejectOrderBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderRejectOrderBySupplier(params?: OrderRejectOrderBySupplier$Params, context?: HttpContext): Observable<number> {
    return this.orderRejectOrderBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderCancelOrder()` */
  static readonly OrderCancelOrderPath = '/api/order/{orderId}/CancelOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderCancelOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderCancelOrder$Response(params: OrderCancelOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderCancelOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderCancelOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderCancelOrder(params: OrderCancelOrder$Params, context?: HttpContext): Observable<number> {
    return this.orderCancelOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `orderGetSentToParticipantOrderCount()` */
  static readonly OrderGetSentToParticipantOrderCountPath = '/api/order/GetSentToParticipantCount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderGetSentToParticipantOrderCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGetSentToParticipantOrderCount$Response(params?: OrderGetSentToParticipantOrderCount$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return orderGetSentToParticipantOrderCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderGetSentToParticipantOrderCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderGetSentToParticipantOrderCount(params?: OrderGetSentToParticipantOrderCount$Params, context?: HttpContext): Observable<Blob> {
    return this.orderGetSentToParticipantOrderCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `orderRemoveDraft()` */
  static readonly OrderRemoveDraftPath = '/api/order';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderRemoveDraft()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderRemoveDraft$Response(params: OrderRemoveDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return orderRemoveDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderRemoveDraft$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  orderRemoveDraft(params: OrderRemoveDraft$Params, context?: HttpContext): Observable<void> {
    return this.orderRemoveDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `orderLinkAndPublishPublicOfferOrder()` */
  static readonly OrderLinkAndPublishPublicOfferOrderPath = '/api/order/LinkAndPublishPublicOfferOrder';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `orderLinkAndPublishPublicOfferOrder()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderLinkAndPublishPublicOfferOrder$Response(params?: OrderLinkAndPublishPublicOfferOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return orderLinkAndPublishPublicOfferOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `orderLinkAndPublishPublicOfferOrder$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  orderLinkAndPublishPublicOfferOrder(params?: OrderLinkAndPublishPublicOfferOrder$Params, context?: HttpContext): Observable<number> {
    return this.orderLinkAndPublishPublicOfferOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
