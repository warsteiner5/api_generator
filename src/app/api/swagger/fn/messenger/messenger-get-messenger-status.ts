/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMessengerStatusAltDto } from '../../models/api-market-json-result-of-messenger-status';

export interface MessengerGetMessengerStatus$Params {
}

export function messengerGetMessengerStatus(http: HttpClient, rootUrl: string, params?: MessengerGetMessengerStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMessengerStatusAltDto>> {
  const rb = new RequestBuilder(rootUrl, messengerGetMessengerStatus.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMessengerStatusAltDto>;
    })
  );
}

messengerGetMessengerStatus.PATH = '/market/api/v1/messenger/getMessengerStatus';
