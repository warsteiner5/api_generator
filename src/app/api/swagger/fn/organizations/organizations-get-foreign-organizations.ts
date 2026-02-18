/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-foreign-organization-dto';

export interface OrganizationsGetForeignOrganizations$Params {
      body?: Array<string> | null
}

export function organizationsGetForeignOrganizations(http: HttpClient, rootUrl: string, params?: OrganizationsGetForeignOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetForeignOrganizations.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto>;
    })
  );
}

organizationsGetForeignOrganizations.PATH = '/bla-bla-vla/organizations/foreign';
