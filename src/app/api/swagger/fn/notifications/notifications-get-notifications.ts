/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-notification-info';
import { ApiNotificationFilterObjectAltDto } from '../../models/api-notification-filter-object';

export interface NotificationsGetNotifications$Params {
      body?: ApiNotificationFilterObjectAltDto | null
}

export function notificationsGetNotifications(http: HttpClient, rootUrl: string, params?: NotificationsGetNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo>> {
  const rb = new RequestBuilder(rootUrl, notificationsGetNotifications.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo>;
    })
  );
}

notificationsGetNotifications.PATH = '/bla-bla-vla/notifications/my';
