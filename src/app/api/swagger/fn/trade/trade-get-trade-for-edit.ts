/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeDto } from '../../models/api-trade-dto';

export interface TradeGetTradeForEdit$Params {
  id: number;
}

export function tradeGetTradeForEdit(http: HttpClient, rootUrl: string, params: TradeGetTradeForEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradeForEdit.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiTradeDto>;
    })
  );
}

tradeGetTradeForEdit.PATH = '/api/Trade/{id}/GetTradeForEdit';
