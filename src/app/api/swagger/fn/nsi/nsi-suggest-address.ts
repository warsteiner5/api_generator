/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSuggestResponseOfAddressDto } from '../../models/api-market-json-result-of-suggest-response-of-address-dto';

export interface NsiSuggestAddress$Params {
  query: string | null;
  country?: string | null;
}

export function nsiSuggestAddress(http: HttpClient, rootUrl: string, params: NsiSuggestAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfAddressDto>> {
  const rb = new RequestBuilder(rootUrl, nsiSuggestAddress.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
    rb.query('country', params.country, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfAddressDto>;
    })
  );
}

nsiSuggestAddress.PATH = '/bla-bla-vla/nsi/address/suggest';
