/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfOkeiShortDto } from '../../models/api-market-json-result-of-list-of-okei-short-dto';

export interface DictionariesGetAllOkeiCodes$Params {
}

export function dictionariesGetAllOkeiCodes(http: HttpClient, rootUrl: string, params?: DictionariesGetAllOkeiCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkeiShortDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetAllOkeiCodes.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfOkeiShortDto>;
    })
  );
}

dictionariesGetAllOkeiCodes.PATH = '/bla-bla-vla/dictionaries/okei';
