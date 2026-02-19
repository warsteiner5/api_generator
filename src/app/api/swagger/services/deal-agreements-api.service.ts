/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiResultOfIntegerAltDto } from '../models/api-api-result-of-integer';
import { dealAgreementsAddAgreementByCustomer } from '../fn/deal-agreements/deal-agreements-add-agreement-by-customer';
import { DealAgreementsAddAgreementByCustomer$Params } from '../fn/deal-agreements/deal-agreements-add-agreement-by-customer';
import { dealAgreementsAddAgreementByParticipant } from '../fn/deal-agreements/deal-agreements-add-agreement-by-participant';
import { DealAgreementsAddAgreementByParticipant$Params } from '../fn/deal-agreements/deal-agreements-add-agreement-by-participant';
import { dealAgreementsAddDealAgreementHistory } from '../fn/deal-agreements/deal-agreements-add-deal-agreement-history';
import { DealAgreementsAddDealAgreementHistory$Params } from '../fn/deal-agreements/deal-agreements-add-deal-agreement-history';
import { dealAgreementsApproveAgreementByCustomer } from '../fn/deal-agreements/deal-agreements-approve-agreement-by-customer';
import { DealAgreementsApproveAgreementByCustomer$Params } from '../fn/deal-agreements/deal-agreements-approve-agreement-by-customer';
import { dealAgreementsApproveAgreementByParticipant } from '../fn/deal-agreements/deal-agreements-approve-agreement-by-participant';
import { DealAgreementsApproveAgreementByParticipant$Params } from '../fn/deal-agreements/deal-agreements-approve-agreement-by-participant';
import { dealAgreementsGetAgreementHistory } from '../fn/deal-agreements/deal-agreements-get-agreement-history';
import { DealAgreementsGetAgreementHistory$Params } from '../fn/deal-agreements/deal-agreements-get-agreement-history';
import { dealAgreementsGetLastAgreementHistory } from '../fn/deal-agreements/deal-agreements-get-last-agreement-history';
import { DealAgreementsGetLastAgreementHistory$Params } from '../fn/deal-agreements/deal-agreements-get-last-agreement-history';
import { ApiMarketJsonResultOfDealAgreementHistoryDto } from '../models/api-market-json-result-of-deal-agreement-history-dto';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfDealAgreementHistoryDto } from '../models/api-market-json-result-of-list-of-deal-agreement-history-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class DealAgreementsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dealAgreementsGetAgreementHistory()` */
  static readonly DealAgreementsGetAgreementHistoryPath = '/market/api/v1/deals/{dealId}/agreements/history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsGetAgreementHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsGetAgreementHistory$Response(params: DealAgreementsGetAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDealAgreementHistoryDto>> {
    return dealAgreementsGetAgreementHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsGetAgreementHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsGetAgreementHistory(params: DealAgreementsGetAgreementHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDealAgreementHistoryDto> {
    return this.dealAgreementsGetAgreementHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDealAgreementHistoryDto>): ApiMarketJsonResultOfListOfDealAgreementHistoryDto => r.body)
    );
  }

  /** Path part for operation `dealAgreementsGetLastAgreementHistory()` */
  static readonly DealAgreementsGetLastAgreementHistoryPath = '/market/api/v1/deals/{dealId}/agreements/last';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsGetLastAgreementHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsGetLastAgreementHistory$Response(params: DealAgreementsGetLastAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealAgreementHistoryDto>> {
    return dealAgreementsGetLastAgreementHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsGetLastAgreementHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsGetLastAgreementHistory(params: DealAgreementsGetLastAgreementHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDealAgreementHistoryDto> {
    return this.dealAgreementsGetLastAgreementHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDealAgreementHistoryDto>): ApiMarketJsonResultOfDealAgreementHistoryDto => r.body)
    );
  }

  /** Path part for operation `dealAgreementsAddDealAgreementHistory()` */
  static readonly DealAgreementsAddDealAgreementHistoryPath = '/market/api/v1/deals/{dealId}/agreements/initial/history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsAddDealAgreementHistory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealAgreementsAddDealAgreementHistory$Response(params: DealAgreementsAddDealAgreementHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiResultOfIntegerAltDto>> {
    return dealAgreementsAddDealAgreementHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsAddDealAgreementHistory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealAgreementsAddDealAgreementHistory(params: DealAgreementsAddDealAgreementHistory$Params, context?: HttpContext): Observable<ApiApiResultOfIntegerAltDto> {
    return this.dealAgreementsAddDealAgreementHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiResultOfIntegerAltDto>): ApiApiResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealAgreementsAddAgreementByParticipant()` */
  static readonly DealAgreementsAddAgreementByParticipantPath = '/market/api/v1/deals/{dealId}/agreements/participants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsAddAgreementByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealAgreementsAddAgreementByParticipant$Response(params: DealAgreementsAddAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealAgreementsAddAgreementByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsAddAgreementByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealAgreementsAddAgreementByParticipant(params: DealAgreementsAddAgreementByParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealAgreementsAddAgreementByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealAgreementsAddAgreementByCustomer()` */
  static readonly DealAgreementsAddAgreementByCustomerPath = '/market/api/v1/deals/{dealId}/agreements/customers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsAddAgreementByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealAgreementsAddAgreementByCustomer$Response(params: DealAgreementsAddAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealAgreementsAddAgreementByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsAddAgreementByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealAgreementsAddAgreementByCustomer(params: DealAgreementsAddAgreementByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealAgreementsAddAgreementByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealAgreementsApproveAgreementByCustomer()` */
  static readonly DealAgreementsApproveAgreementByCustomerPath = '/market/api/v1/deals/{dealId}/agreements/{agreementId}/customers/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsApproveAgreementByCustomer()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsApproveAgreementByCustomer$Response(params: DealAgreementsApproveAgreementByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealAgreementsApproveAgreementByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsApproveAgreementByCustomer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsApproveAgreementByCustomer(params: DealAgreementsApproveAgreementByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealAgreementsApproveAgreementByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealAgreementsApproveAgreementByParticipant()` */
  static readonly DealAgreementsApproveAgreementByParticipantPath = '/market/api/v1/deals/{dealId}/agreements/{agreementId}/participants/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealAgreementsApproveAgreementByParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsApproveAgreementByParticipant$Response(params: DealAgreementsApproveAgreementByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealAgreementsApproveAgreementByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealAgreementsApproveAgreementByParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealAgreementsApproveAgreementByParticipant(params: DealAgreementsApproveAgreementByParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealAgreementsApproveAgreementByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
