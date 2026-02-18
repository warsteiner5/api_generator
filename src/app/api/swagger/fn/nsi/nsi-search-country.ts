/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-country-dto';

export interface NsiSearchCountry$Params {
  query: string | null;
}

export function nsiSearchCountry(http: HttpClient, rootUrl: string, params: NsiSearchCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>> {
  const rb = new RequestBuilder(rootUrl, nsiSearchCountry.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>;
    })
  );
}

nsiSearchCountry.PATH = '/bla-bla-vla/nsi/searchCountry';
