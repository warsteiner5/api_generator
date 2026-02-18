/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAutocompleteForeignOrganizationsRequestAltDto } from '../../models/api-autocomplete-foreign-organizations-request';
import { ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto } from '../../models/api-market-json-result-of-pagination-result-of-foreign-organization-dto';

export interface OrganizationsAutocompleteForeignOrganizations$Params {
      body?: ApiAutocompleteForeignOrganizationsRequestAltDto | null
}

export function organizationsAutocompleteForeignOrganizations(http: HttpClient, rootUrl: string, params?: OrganizationsAutocompleteForeignOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsAutocompleteForeignOrganizations.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto>;
    })
  );
}

organizationsAutocompleteForeignOrganizations.PATH = '/bla-bla-vla/organizations/autocomplete/foreign';
