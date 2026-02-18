/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEditMzPriceListDto } from '../../models/api-edit-mz-price-list-dto';
import { ApiMarketJsonResultOfMzPriceListDto } from '../../models/api-market-json-result-of-mz-price-list-dto';

export interface PriceListsEditPriceList$Params {
      body?: ApiEditMzPriceListDto | null
}

export function priceListsEditPriceList(http: HttpClient, rootUrl: string, params?: PriceListsEditPriceList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMzPriceListDto>> {
  const rb = new RequestBuilder(rootUrl, priceListsEditPriceList.PATH, 'post');
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

priceListsEditPriceList.PATH = '/bla-bla-vla/priceLists/edit';
