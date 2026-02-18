/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCompetitiveListItemDto } from '../../models/api-market-json-result-of-list-of-competitive-list-item-dto';

export interface CompetetiveListGetCompetetiveListItemsByTradeId$Params {
  tradeId: number;
}

export function competetiveListGetCompetetiveListItemsByTradeId(http: HttpClient, rootUrl: string, params: CompetetiveListGetCompetetiveListItemsByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetCompetetiveListItemsByTradeId.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCompetitiveListItemDto>;
    })
  );
}

competetiveListGetCompetetiveListItemsByTradeId.PATH = '/bla-bla-vla/competetivelist/{tradeId}';
