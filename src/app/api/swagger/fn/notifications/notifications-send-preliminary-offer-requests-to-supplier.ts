/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface NotificationsSendPreliminaryOfferRequestsToSupplier$Params {
  tradeId: number;
}

export function notificationsSendPreliminaryOfferRequestsToSupplier(http: HttpClient, rootUrl: string, params: NotificationsSendPreliminaryOfferRequestsToSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, notificationsSendPreliminaryOfferRequestsToSupplier.PATH, 'post');
  if (params) {
    rb.query('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

notificationsSendPreliminaryOfferRequestsToSupplier.PATH = '/market/api/v1/notifications/send-preliminary-offer-requests';
