/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { ApiOrganizationFilterAltDto } from '../../models/api-organization-filter';

export interface OrganizationsGetOrganizationsByFilter$Params {
      body?: ApiOrganizationFilterAltDto | null
}

export function organizationsGetOrganizationsByFilter(http: HttpClient, rootUrl: string, params?: OrganizationsGetOrganizationsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetOrganizationsByFilter.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto>;
    })
  );
}

organizationsGetOrganizationsByFilter.PATH = '/bla-bla-vla/organizations/filtered';
