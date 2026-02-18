/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketCompositeOrganizationShortInfoDto } from '../../models/api-market-composite-organization-short-info-dto';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface OrganizationsPatchOrganizationShortInfo$Params {
      body?: ApiMarketCompositeOrganizationShortInfoDto | null
}

export function organizationsPatchOrganizationShortInfo(http: HttpClient, rootUrl: string, params?: OrganizationsPatchOrganizationShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsPatchOrganizationShortInfo.PATH, 'post');
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

organizationsPatchOrganizationShortInfo.PATH = '/bla-bla-vla/organizations/my/short-info';
