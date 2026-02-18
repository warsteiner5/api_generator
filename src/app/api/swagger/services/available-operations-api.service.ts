/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { availableOperationsGetByApplication } from '../fn/available-operations/available-operations-get-by-application';
import { AvailableOperationsGetByApplication$Params } from '../fn/available-operations/available-operations-get-by-application';
import { availableOperationsGetByApplication2 } from '../fn/available-operations/available-operations-get-by-application-2';
import { AvailableOperationsGetByApplication2$Params } from '../fn/available-operations/available-operations-get-by-application-2';
import { availableOperationsGetByDeal } from '../fn/available-operations/available-operations-get-by-deal';
import { AvailableOperationsGetByDeal$Params } from '../fn/available-operations/available-operations-get-by-deal';
import { availableOperationsGetByOrder } from '../fn/available-operations/available-operations-get-by-order';
import { AvailableOperationsGetByOrder$Params } from '../fn/available-operations/available-operations-get-by-order';
import { availableOperationsGetByQuotationSession } from '../fn/available-operations/available-operations-get-by-quotation-session';
import { AvailableOperationsGetByQuotationSession$Params } from '../fn/available-operations/available-operations-get-by-quotation-session';
import { availableOperationsGetByTrade } from '../fn/available-operations/available-operations-get-by-trade';
import { AvailableOperationsGetByTrade$Params } from '../fn/available-operations/available-operations-get-by-trade';
import { ApiMarketJsonResultOfApplicationAvailableOperationDto } from '../models/api-market-json-result-of-application-available-operation-dto';
import { ApiMarketJsonResultOfOrderAvailableOperationsDto } from '../models/api-market-json-result-of-order-available-operations-dto';
import { ApiMarketJsonResultOfQuotationSessionAvailableOperationDto } from '../models/api-market-json-result-of-quotation-session-available-operation-dto';
import { ApiMarketJsonResultOfTradeAvailableOperationsDto } from '../models/api-market-json-result-of-trade-available-operations-dto';

@Injectable({ providedIn: 'root' })
export class AvailableOperationsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `availableOperationsGetByTrade()` */
  static readonly AvailableOperationsGetByTradePath = '/bla-bla-vla/available-operations/trade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `availableOperationsGetByTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByTrade$Response(params: AvailableOperationsGetByTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradeAvailableOperationsDto>> {
    return availableOperationsGetByTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `availableOperationsGetByTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByTrade(params: AvailableOperationsGetByTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradeAvailableOperationsDto> {
    return this.availableOperationsGetByTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradeAvailableOperationsDto>): ApiMarketJsonResultOfTradeAvailableOperationsDto => r.body)
    );
  }

  /** Path part for operation `availableOperationsGetByApplication()` */
  static readonly AvailableOperationsGetByApplicationPath = '/bla-bla-vla/available-operations/trade/{tradeId}/application';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `availableOperationsGetByApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByApplication$Response(params: AvailableOperationsGetByApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>> {
    return availableOperationsGetByApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `availableOperationsGetByApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByApplication(params: AvailableOperationsGetByApplication$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfApplicationAvailableOperationDto> {
    return this.availableOperationsGetByApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>): ApiMarketJsonResultOfApplicationAvailableOperationDto => r.body)
    );
  }

  /** Path part for operation `availableOperationsGetByApplication2()` */
  static readonly AvailableOperationsGetByApplication2Path = '/bla-bla-vla/available-operations/trade/{tradeId}/application/{applicationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `availableOperationsGetByApplication2()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByApplication2$Response(params: AvailableOperationsGetByApplication2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>> {
    return availableOperationsGetByApplication2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `availableOperationsGetByApplication2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByApplication2(params: AvailableOperationsGetByApplication2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfApplicationAvailableOperationDto> {
    return this.availableOperationsGetByApplication2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>): ApiMarketJsonResultOfApplicationAvailableOperationDto => r.body)
    );
  }

  /** Path part for operation `availableOperationsGetByDeal()` */
  static readonly AvailableOperationsGetByDealPath = '/bla-bla-vla/available-operations/deal/{dealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `availableOperationsGetByDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByDeal$Response(params: AvailableOperationsGetByDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>> {
    return availableOperationsGetByDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `availableOperationsGetByDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByDeal(params: AvailableOperationsGetByDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfApplicationAvailableOperationDto> {
    return this.availableOperationsGetByDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>): ApiMarketJsonResultOfApplicationAvailableOperationDto => r.body)
    );
  }

  /** Path part for operation `availableOperationsGetByQuotationSession()` */
  static readonly AvailableOperationsGetByQuotationSessionPath = '/bla-bla-vla/available-operations/trade/{tradeId}/quotation-session';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `availableOperationsGetByQuotationSession()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByQuotationSession$Response(params: AvailableOperationsGetByQuotationSession$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAvailableOperationDto>> {
    return availableOperationsGetByQuotationSession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `availableOperationsGetByQuotationSession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByQuotationSession(params: AvailableOperationsGetByQuotationSession$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionAvailableOperationDto> {
    return this.availableOperationsGetByQuotationSession$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAvailableOperationDto>): ApiMarketJsonResultOfQuotationSessionAvailableOperationDto => r.body)
    );
  }

  /** Path part for operation `availableOperationsGetByOrder()` */
  static readonly AvailableOperationsGetByOrderPath = '/bla-bla-vla/available-operations/trade/{orderId}/single-supplier';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `availableOperationsGetByOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByOrder$Response(params: AvailableOperationsGetByOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrderAvailableOperationsDto>> {
    return availableOperationsGetByOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `availableOperationsGetByOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  availableOperationsGetByOrder(params: AvailableOperationsGetByOrder$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrderAvailableOperationsDto> {
    return this.availableOperationsGetByOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrderAvailableOperationsDto>): ApiMarketJsonResultOfOrderAvailableOperationsDto => r.body)
    );
  }

}
