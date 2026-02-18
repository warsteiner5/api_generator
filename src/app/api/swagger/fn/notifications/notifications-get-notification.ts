/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNotificationDto } from '../../models/api-market-json-result-of-notification-dto';

export interface NotificationsGetNotification$Params {
  id: number;
}

export function notificationsGetNotification(http: HttpClient, rootUrl: string, params: NotificationsGetNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNotificationDto>> {
  const rb = new RequestBuilder(rootUrl, notificationsGetNotification.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNotificationDto>;
    })
  );
}

notificationsGetNotification.PATH = '/bla-bla-vla/notifications/{id}';
