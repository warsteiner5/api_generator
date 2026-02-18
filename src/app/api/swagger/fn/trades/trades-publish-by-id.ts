/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDigitalSignatureDto } from '../../models/api-digital-signature-dto';
import { ApiMarketJsonResultOfTradePublishResult } from '../../models/api-market-json-result-of-trade-publish-result';

export interface TradesPublishById$Params {
  id: number;
      body?: ApiDigitalSignatureDto | null
}

export function tradesPublishById(http: HttpClient, rootUrl: string, params: TradesPublishById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
  const rb = new RequestBuilder(rootUrl, tradesPublishById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>;
    })
  );
}

tradesPublishById.PATH = '/bla-bla-vla/trades/publish/{id}';
