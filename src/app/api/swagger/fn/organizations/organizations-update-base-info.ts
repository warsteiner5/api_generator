/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiUpdateOrganizationBaseInfoSignedRequestAltDto } from '../../models/api-update-organization-base-info-signed-request';

export interface OrganizationsUpdateBaseInfo$Params {
      body?: ApiUpdateOrganizationBaseInfoSignedRequestAltDto | null
}

export function organizationsUpdateBaseInfo(http: HttpClient, rootUrl: string, params?: OrganizationsUpdateBaseInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsUpdateBaseInfo.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

organizationsUpdateBaseInfo.PATH = '/bla-bla-vla/organizations/my/base-info/signed';
