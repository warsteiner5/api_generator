/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketOrganizationFullInfoDto } from '../../models/api-market-json-result-of-market-organization-full-info-dto';

export interface OrganizationsFindOrganizationInfoByGuid$Params {
  guid: string;
}

export function organizationsFindOrganizationInfoByGuid(http: HttpClient, rootUrl: string, params: OrganizationsFindOrganizationInfoByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsFindOrganizationInfoByGuid.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
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

organizationsFindOrganizationInfoByGuid.PATH = '/bla-bla-vla/organizations/{guid}';
