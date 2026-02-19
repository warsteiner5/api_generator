/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPagedCollectionOfKtruShortDto } from '../../models/api-market-json-result-of-paged-collection-of-ktru-short-dto';

export interface DictionariesGetKtruByOkpd2$Params {
  okpd2: string | null;
  take: number;
  skip: number;
}

export function dictionariesGetKtruByOkpd2(http: HttpClient, rootUrl: string, params: DictionariesGetKtruByOkpd2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetKtruByOkpd2.PATH, 'get');
  if (params) {
    rb.query('okpd2', params.okpd2, {});
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

dictionariesGetKtruByOkpd2.PATH = '/market/api/v1/dictionaries/ktru';
