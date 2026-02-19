/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto } from '../../models/api-market-json-result-of-list-of-market-organization-full-info-dto';

export interface OrganizationsGetOrganizationsForCurrentUser$Params {
}

export function organizationsGetOrganizationsForCurrentUser(http: HttpClient, rootUrl: string, params?: OrganizationsGetOrganizationsForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetOrganizationsForCurrentUser.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto>;
    })
  );
}

organizationsGetOrganizationsForCurrentUser.PATH = '/market/api/v1/organizations/getOrganizationsForCurrentUser';
