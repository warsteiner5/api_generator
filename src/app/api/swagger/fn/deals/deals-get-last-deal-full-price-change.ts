/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDealFullPriceChangeDto } from '../../models/api-market-json-result-of-deal-full-price-change-dto';

export interface DealsGetLastDealFullPriceChange$Params {
  dealId: number;
}

export function dealsGetLastDealFullPriceChange(http: HttpClient, rootUrl: string, params: DealsGetLastDealFullPriceChange$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealFullPriceChangeDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetLastDealFullPriceChange.PATH, 'get');
  if (params) {
    rb.query('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDealFullPriceChangeDto>;
    })
  );
}

dealsGetLastDealFullPriceChange.PATH = '/market/api/v1/deals/price/lastPriceChange';
