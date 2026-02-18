/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMzPriceListShortInfoDto } from '../../models/api-market-json-result-of-list-of-mz-price-list-short-info-dto';

export interface PriceListsGetAllPriceListsShortInfo$Params {
}

export function priceListsGetAllPriceListsShortInfo(http: HttpClient, rootUrl: string, params?: PriceListsGetAllPriceListsShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsGetAllPriceListsShortInfo.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>;
    })
  );
}

priceListsGetAllPriceListsShortInfo.PATH = '/bla-bla-vla/priceLists/all';
