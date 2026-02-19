/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketOrganizationCommonInfoDto } from '../../models/api-market-json-result-of-market-organization-common-info-dto';

export interface OrganizationsFindOrganizationInfo$Params {
}

export function organizationsFindOrganizationInfo(http: HttpClient, rootUrl: string, params?: OrganizationsFindOrganizationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationCommonInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsFindOrganizationInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationCommonInfoDto>;
    })
  );
}

organizationsFindOrganizationInfo.PATH = '/market/api/v1/organizations/my';
