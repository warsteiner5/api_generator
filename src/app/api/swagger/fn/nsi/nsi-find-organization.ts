/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrganizationDtoOf } from '../../models/api-market-json-result-of-organization-dto-of';

export interface NsiFindOrganization$Params {
  inn: string | null;
  kpp: string | null;
}

export function nsiFindOrganization(http: HttpClient, rootUrl: string, params: NsiFindOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationDtoOf>> {
  const rb = new RequestBuilder(rootUrl, nsiFindOrganization.PATH, 'get');
  if (params) {
    rb.query('inn', params.inn, {});
    rb.query('kpp', params.kpp, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrganizationDtoOf>;
    })
  );
}

nsiFindOrganization.PATH = '/market/api/v1/nsi/organization/find';
