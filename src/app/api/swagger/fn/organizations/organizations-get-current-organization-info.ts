/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketOrganizationFullInfoDto } from '../../models/api-market-json-result-of-market-organization-full-info-dto';

export interface OrganizationsGetCurrentOrganizationInfo$Params {
}

export function organizationsGetCurrentOrganizationInfo(http: HttpClient, rootUrl: string, params?: OrganizationsGetCurrentOrganizationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetCurrentOrganizationInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>;
    })
  );
}

organizationsGetCurrentOrganizationInfo.PATH = '/bla-bla-vla/organizations/self';
