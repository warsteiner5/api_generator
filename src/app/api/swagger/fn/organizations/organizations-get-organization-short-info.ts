/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto } from '../../models/api-market-json-result-of-market-composite-organization-short-info-dto';

export interface OrganizationsGetOrganizationShortInfo$Params {
}

export function organizationsGetOrganizationShortInfo(http: HttpClient, rootUrl: string, params?: OrganizationsGetOrganizationShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetOrganizationShortInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto>;
    })
  );
}

organizationsGetOrganizationShortInfo.PATH = '/bla-bla-vla/organizations/my/short-info';
