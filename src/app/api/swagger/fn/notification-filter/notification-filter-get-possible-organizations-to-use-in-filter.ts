/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrganizationShortInfoDtoOf } from '../../models/api-market-json-result-of-organization-short-info-dto-of';

export interface NotificationFilterGetPossibleOrganizationsToUseInFilter$Params {
}

export function notificationFilterGetPossibleOrganizationsToUseInFilter(http: HttpClient, rootUrl: string, params?: NotificationFilterGetPossibleOrganizationsToUseInFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationShortInfoDtoOf>> {
  const rb = new RequestBuilder(rootUrl, notificationFilterGetPossibleOrganizationsToUseInFilter.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrganizationShortInfoDtoOf>;
    })
  );
}

notificationFilterGetPossibleOrganizationsToUseInFilter.PATH = '/market/api/v1/notifications/filters/my/possible-organizations';
