/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMzPriceListDto } from '../../models/api-market-json-result-of-mz-price-list-dto';
import { ApiMzPriceListDto } from '../../models/api-mz-price-list-dto';

export interface PriceListsCreatePriceList$Params {
      body?: ApiMzPriceListDto | null
}

export function priceListsCreatePriceList(http: HttpClient, rootUrl: string, params?: PriceListsCreatePriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsCreatePriceList.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>;
    })
  );
}

priceListsCreatePriceList.PATH = '/bla-bla-vla/priceLists/create';
