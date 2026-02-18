/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../../models/api-market-json-result-of-list-of-characteristic-dto';

export interface TradesGetTradeCharacteristics$Params {
  id: number;
}

export function tradesGetTradeCharacteristics(http: HttpClient, rootUrl: string, params: TradesGetTradeCharacteristics$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTradeCharacteristics.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>;
    })
  );
}

tradesGetTradeCharacteristics.PATH = '/bla-bla-vla/trades/{id}/characteristics';
