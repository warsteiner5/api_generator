/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSingleSupplierTradeViewDto } from '../../models/api-market-json-result-of-single-supplier-trade-view-dto';

export interface SingleSupplierGet$Params {
  id: number;
}

export function singleSupplierGet(http: HttpClient, rootUrl: string, params: SingleSupplierGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSingleSupplierTradeViewDto>> {
  const rb = new RequestBuilder(rootUrl, singleSupplierGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSingleSupplierTradeViewDto>;
    })
  );
}

singleSupplierGet.PATH = '/bla-bla-vla/single-supplier/{id}';
