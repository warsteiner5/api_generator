/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-country-dto';

export interface NsiGetCountry$Params {
}

export function nsiGetCountry(http: HttpClient, rootUrl: string, params?: NsiGetCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>> {
  const rb = new RequestBuilder(rootUrl, nsiGetCountry.PATH, 'get');
  if (params) {
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

nsiGetCountry.PATH = '/bla-bla-vla/nsi/getCountry';
