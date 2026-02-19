/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';

export interface NotificationsMarkAllNotificationsAsRead$Params {
}

export function notificationsMarkAllNotificationsAsRead(http: HttpClient, rootUrl: string, params?: NotificationsMarkAllNotificationsAsRead$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, notificationsMarkAllNotificationsAsRead.PATH, 'post');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

notificationsMarkAllNotificationsAsRead.PATH = '/market/api/v1/notifications/unread/mark';
