/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPagedCollectionOfKtruShortDto } from '../../models/api-market-json-result-of-paged-collection-of-ktru-short-dto';

export interface DictionariesSearchKtruByString$Params {
  searchString: string | null;
  take: number;
  skip: number;
}

export function dictionariesSearchKtruByString(http: HttpClient, rootUrl: string, params: DictionariesSearchKtruByString$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesSearchKtruByString.PATH, 'get');
  if (params) {
    rb.query('searchString', params.searchString, {});
    rb.query('take', params.take, {});
    rb.query('skip', params.skip, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>;
    })
  );
}

dictionariesSearchKtruByString.PATH = '/market/api/v1/dictionaries/ktru/search';
