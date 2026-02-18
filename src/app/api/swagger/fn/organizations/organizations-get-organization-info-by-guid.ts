/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrganizanizationFullCardDto } from '../../models/api-market-json-result-of-organizanization-full-card-dto';

export interface OrganizationsGetOrganizationInfoByGuid$Params {
  guid: string;
}

export function organizationsGetOrganizationInfoByGuid(http: HttpClient, rootUrl: string, params: OrganizationsGetOrganizationInfoByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizanizationFullCardDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetOrganizationInfoByGuid.PATH, 'get');
  if (params) {
    rb.path('guid', params.guid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrganizanizationFullCardDto>;
    })
  );
}

organizationsGetOrganizationInfoByGuid.PATH = '/bla-bla-vla/organizations/{guid}/card';
