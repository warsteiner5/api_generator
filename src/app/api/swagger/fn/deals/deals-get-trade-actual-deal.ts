/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketDealDto } from '../../models/api-market-json-result-of-market-deal-dto';

export interface DealsGetTradeActualDeal$Params {
  id: number;
}

export function dealsGetTradeActualDeal(http: HttpClient, rootUrl: string, params: DealsGetTradeActualDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketDealDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetTradeActualDeal.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketDealDto>;
    })
  );
}

dealsGetTradeActualDeal.PATH = '/bla-bla-vla/deals/{id}';
