/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto } from '../../models/api-market-json-result-of-suggest-response-of-bank-suggest-dto';

export interface NsiSuggestBank$Params {
  query: string | null;
}

export function nsiSuggestBank(http: HttpClient, rootUrl: string, params: NsiSuggestBank$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto>> {
  const rb = new RequestBuilder(rootUrl, nsiSuggestBank.PATH, 'get');
  if (params) {
    rb.query('query', params.query, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto>;
    })
  );
}

nsiSuggestBank.PATH = '/market/api/v1/nsi/bank/suggest';
