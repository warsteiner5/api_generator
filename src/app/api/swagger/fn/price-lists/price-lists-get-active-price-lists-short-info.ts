/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfMzPriceListShortInfoDto } from '../../models/api-market-json-result-of-list-of-mz-price-list-short-info-dto';

export interface PriceListsGetActivePriceListsShortInfo$Params {
}

export function priceListsGetActivePriceListsShortInfo(http: HttpClient, rootUrl: string, params?: PriceListsGetActivePriceListsShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMzPriceListShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsGetActivePriceListsShortInfo.PATH, 'get');
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

priceListsGetActivePriceListsShortInfo.PATH = '/market/api/v1/priceLists/active';
