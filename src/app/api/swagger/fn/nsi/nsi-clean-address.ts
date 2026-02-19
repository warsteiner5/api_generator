/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfAddressDto } from '../../models/api-market-json-result-of-address-dto';

export interface NsiCleanAddress$Params {
  query: string | null;
}

export function nsiCleanAddress(http: HttpClient, rootUrl: string, params: NsiCleanAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAddressDto>> {
  const rb = new RequestBuilder(rootUrl, nsiCleanAddress.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfAddressDto>;
    })
  );
}

nsiCleanAddress.PATH = '/market/api/v1/nsi/address/clean';
