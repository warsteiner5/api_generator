/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfDiscussionItemDtoOf } from '../models/api-market-json-result-of-discussion-item-dto-of';
import { ApiMarketJsonResultOfIDiscussionHistoryDtoOf } from '../models/api-market-json-result-of-i-discussion-history-dto-of';
import { ApiMarketJsonResultOfString } from '../models/api-market-json-result-of-string';
import { tradeProtocolsGetAutoProtocol } from '../fn/trade-protocols/trade-protocols-get-auto-protocol';
import { TradeProtocolsGetAutoProtocol$Params } from '../fn/trade-protocols/trade-protocols-get-auto-protocol';
import { tradeProtocolsGetDiscussionHistory } from '../fn/trade-protocols/trade-protocols-get-discussion-history';
import { TradeProtocolsGetDiscussionHistory$Params } from '../fn/trade-protocols/trade-protocols-get-discussion-history';
import { tradeProtocolsGetProtocolsHistory } from '../fn/trade-protocols/trade-protocols-get-protocols-history';
import { TradeProtocolsGetProtocolsHistory$Params } from '../fn/trade-protocols/trade-protocols-get-protocols-history';

@Injectable({ providedIn: 'root' })
export class TradeProtocolsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tradeProtocolsGetProtocolsHistory()` */
  static readonly TradeProtocolsGetProtocolsHistoryPath = '/bla-bla-vla/protocols/trades/{tradeId}/history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeProtocolsGetProtocolsHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeProtocolsGetProtocolsHistory$Response(params: TradeProtocolsGetProtocolsHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDtoOf>> {
    return tradeProtocolsGetProtocolsHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeProtocolsGetProtocolsHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeProtocolsGetProtocolsHistory(params: TradeProtocolsGetProtocolsHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDiscussionItemDtoOf> {
    return this.tradeProtocolsGetProtocolsHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDtoOf>): ApiMarketJsonResultOfDiscussionItemDtoOf => r.body)
    );
  }

  /** Path part for operation `tradeProtocolsGetDiscussionHistory()` */
  static readonly TradeProtocolsGetDiscussionHistoryPath = '/bla-bla-vla/protocols/trades/{tradeId}/discussion-history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeProtocolsGetDiscussionHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeProtocolsGetDiscussionHistory$Response(params: TradeProtocolsGetDiscussionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIDiscussionHistoryDtoOf>> {
    return tradeProtocolsGetDiscussionHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeProtocolsGetDiscussionHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeProtocolsGetDiscussionHistory(params: TradeProtocolsGetDiscussionHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIDiscussionHistoryDtoOf> {
    return this.tradeProtocolsGetDiscussionHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIDiscussionHistoryDtoOf>): ApiMarketJsonResultOfIDiscussionHistoryDtoOf => r.body)
    );
  }

  /** Path part for operation `tradeProtocolsGetAutoProtocol()` */
  static readonly TradeProtocolsGetAutoProtocolPath = '/bla-bla-vla/protocols/trades/{tradeId}/auto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeProtocolsGetAutoProtocol()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeProtocolsGetAutoProtocol$Response(params: TradeProtocolsGetAutoProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
    return tradeProtocolsGetAutoProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeProtocolsGetAutoProtocol$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeProtocolsGetAutoProtocol(params: TradeProtocolsGetAutoProtocol$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfString> {
    return this.tradeProtocolsGetAutoProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfString>): ApiMarketJsonResultOfString => r.body)
    );
  }

}
