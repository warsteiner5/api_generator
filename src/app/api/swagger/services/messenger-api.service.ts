/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfMessengerStatusAltDto } from '../models/api-market-json-result-of-messenger-status';
import { ApiMarketJsonResultOfTelegramUrlAltDto } from '../models/api-market-json-result-of-telegram-url';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { messengerConnectTelegram } from '../fn/messenger/messenger-connect-telegram';
import { MessengerConnectTelegram$Params } from '../fn/messenger/messenger-connect-telegram';
import { messengerGetMessengerStatus } from '../fn/messenger/messenger-get-messenger-status';
import { MessengerGetMessengerStatus$Params } from '../fn/messenger/messenger-get-messenger-status';
import { messengerSendOneApplicationsEvent } from '../fn/messenger/messenger-send-one-applications-event';
import { MessengerSendOneApplicationsEvent$Params } from '../fn/messenger/messenger-send-one-applications-event';
import { messengerSendTradeWithApplicationsEndsEvent } from '../fn/messenger/messenger-send-trade-with-applications-ends-event';
import { MessengerSendTradeWithApplicationsEndsEvent$Params } from '../fn/messenger/messenger-send-trade-with-applications-ends-event';
import { messengerSendTradeWithoutApplicationsEndsEvent } from '../fn/messenger/messenger-send-trade-without-applications-ends-event';
import { MessengerSendTradeWithoutApplicationsEndsEvent$Params } from '../fn/messenger/messenger-send-trade-without-applications-ends-event';

@Injectable({ providedIn: 'root' })
export class MessengerApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `messengerConnectTelegram()` */
  static readonly MessengerConnectTelegramPath = '/market/api/v1/messenger/connectTelegram';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messengerConnectTelegram()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerConnectTelegram$Response(params?: MessengerConnectTelegram$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTelegramUrlAltDto>> {
    return messengerConnectTelegram(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messengerConnectTelegram$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerConnectTelegram(params?: MessengerConnectTelegram$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTelegramUrlAltDto> {
    return this.messengerConnectTelegram$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTelegramUrlAltDto>): ApiMarketJsonResultOfTelegramUrlAltDto => r.body)
    );
  }

  /** Path part for operation `messengerGetMessengerStatus()` */
  static readonly MessengerGetMessengerStatusPath = '/market/api/v1/messenger/getMessengerStatus';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messengerGetMessengerStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerGetMessengerStatus$Response(params?: MessengerGetMessengerStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMessengerStatusAltDto>> {
    return messengerGetMessengerStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messengerGetMessengerStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerGetMessengerStatus(params?: MessengerGetMessengerStatus$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMessengerStatusAltDto> {
    return this.messengerGetMessengerStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMessengerStatusAltDto>): ApiMarketJsonResultOfMessengerStatusAltDto => r.body)
    );
  }

  /** Path part for operation `messengerSendTradeWithApplicationsEndsEvent()` */
  static readonly MessengerSendTradeWithApplicationsEndsEventPath = '/market/api/v1/messenger/sendTradeWithApplicationsEndsEvent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messengerSendTradeWithApplicationsEndsEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerSendTradeWithApplicationsEndsEvent$Response(params?: MessengerSendTradeWithApplicationsEndsEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return messengerSendTradeWithApplicationsEndsEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messengerSendTradeWithApplicationsEndsEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerSendTradeWithApplicationsEndsEvent(params?: MessengerSendTradeWithApplicationsEndsEvent$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.messengerSendTradeWithApplicationsEndsEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `messengerSendTradeWithoutApplicationsEndsEvent()` */
  static readonly MessengerSendTradeWithoutApplicationsEndsEventPath = '/market/api/v1/messenger/sendTradeWithoutApplicationsEndsEvent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messengerSendTradeWithoutApplicationsEndsEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerSendTradeWithoutApplicationsEndsEvent$Response(params?: MessengerSendTradeWithoutApplicationsEndsEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return messengerSendTradeWithoutApplicationsEndsEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messengerSendTradeWithoutApplicationsEndsEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerSendTradeWithoutApplicationsEndsEvent(params?: MessengerSendTradeWithoutApplicationsEndsEvent$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.messengerSendTradeWithoutApplicationsEndsEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `messengerSendOneApplicationsEvent()` */
  static readonly MessengerSendOneApplicationsEventPath = '/market/api/v1/messenger/sendOneApplicationsEvent';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `messengerSendOneApplicationsEvent()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerSendOneApplicationsEvent$Response(params?: MessengerSendOneApplicationsEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return messengerSendOneApplicationsEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `messengerSendOneApplicationsEvent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  messengerSendOneApplicationsEvent(params?: MessengerSendOneApplicationsEvent$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.messengerSendOneApplicationsEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
