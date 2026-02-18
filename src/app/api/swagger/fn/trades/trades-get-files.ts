/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfAllTradeDocumentsDto } from '../../models/api-market-json-result-of-all-trade-documents-dto';

export interface TradesGetFiles$Params {
  tradeId: number;
}

export function tradesGetFiles(http: HttpClient, rootUrl: string, params: TradesGetFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAllTradeDocumentsDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetFiles.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfAllTradeDocumentsDto>;
    })
  );
}

tradesGetFiles.PATH = '/bla-bla-vla/trades/{tradeId}/files';
