/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiSendDealSigningExpiredNotificationParamAltDto } from '../../models/api-send-deal-signing-expired-notification-param';

export interface NotificationsSendDealSigningExpiredNotification$Params {
      body?: ApiSendDealSigningExpiredNotificationParamAltDto | null
}

export function notificationsSendDealSigningExpiredNotification(http: HttpClient, rootUrl: string, params?: NotificationsSendDealSigningExpiredNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, notificationsSendDealSigningExpiredNotification.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

notificationsSendDealSigningExpiredNotification.PATH = '/bla-bla-vla/notifications/send-deal-signing-expired';
