/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto } from '../../models/api-market-json-result-of-list-of-market-partner-organization-dto';

export interface OrganizationsGetMyCustomerPartners$Params {
}

export function organizationsGetMyCustomerPartners(http: HttpClient, rootUrl: string, params?: OrganizationsGetMyCustomerPartners$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetMyCustomerPartners.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto>;
    })
  );
}

organizationsGetMyCustomerPartners.PATH = '/market/api/v1/organizations/partners';
