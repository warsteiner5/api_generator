/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';

export interface NotificationsSendDealWarningNotificationForMmo$Params {
  tradeId: number;
  dealId: number;
}

export function notificationsSendDealWarningNotificationForMmo(http: HttpClient, rootUrl: string, params: NotificationsSendDealWarningNotificationForMmo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, notificationsSendDealWarningNotificationForMmo.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

notificationsSendDealWarningNotificationForMmo.PATH = '/bla-bla-vla/notifications/{tradeId}/{dealId}/send-deal-warn-mmo';
