/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto } from '../../models/api-market-json-result-of-suggest-response-of-organization-suggest-dto';

export interface NsiSuggestOrganization$Params {
  query: string | null;
}

export function nsiSuggestOrganization(http: HttpClient, rootUrl: string, params: NsiSuggestOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto>> {
  const rb = new RequestBuilder(rootUrl, nsiSuggestOrganization.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto>;
    })
  );
}

nsiSuggestOrganization.PATH = '/bla-bla-vla/nsi/organization/suggest';
