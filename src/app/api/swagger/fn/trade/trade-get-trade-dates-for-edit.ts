/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeDatesDto } from '../../models/api-trade-dates-dto';

export interface TradeGetTradeDatesForEdit$Params {
  id: number;
}

export function tradeGetTradeDatesForEdit(http: HttpClient, rootUrl: string, params: TradeGetTradeDatesForEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeDatesDto>> {
  const rb = new RequestBuilder(rootUrl, tradeGetTradeDatesForEdit.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiTradeDatesDto>;
    })
  );
}

tradeGetTradeDatesForEdit.PATH = '/bla-bla-vla/Trade/{id}/GetTradeDatesForEdit';
