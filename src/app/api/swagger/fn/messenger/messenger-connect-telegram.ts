/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTelegramUrl } from '../../models/api-market-json-result-of-telegram-url';

export interface MessengerConnectTelegram$Params {
}

export function messengerConnectTelegram(http: HttpClient, rootUrl: string, params?: MessengerConnectTelegram$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTelegramUrl>> {
  const rb = new RequestBuilder(rootUrl, messengerConnectTelegram.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTelegramUrl>;
    })
  );
}

messengerConnectTelegram.PATH = '/bla-bla-vla/messenger/connectTelegram';
