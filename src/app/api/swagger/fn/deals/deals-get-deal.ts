/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealObjectEnum } from '../../models/api-deal-object-enum';
import { ApiMarketJsonResultOfMarketFullOrderDealDto } from '../../models/api-market-json-result-of-market-full-order-deal-dto';

export interface DealsGetDeal$Params {
  id: number;
  dealObject: ApiDealObjectEnum;
}

export function dealsGetDeal(http: HttpClient, rootUrl: string, params: DealsGetDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketFullOrderDealDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetDeal.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('dealObject', params.dealObject, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketFullOrderDealDto>;
    })
  );
}

dealsGetDeal.PATH = '/bla-bla-vla/deals/{id}/{dealObject}';
