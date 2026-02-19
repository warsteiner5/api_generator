/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAcceptedPriceListFilterDto } from '../../models/api-accepted-price-list-filter-dto';
import { ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto } from '../../models/api-market-json-result-of-accepted-price-lists-extended-result';

export interface CompetetiveListGetAcceptedPriceListsInfo$Params {
      body?: ApiAcceptedPriceListFilterDto | null
}

export function competetiveListGetAcceptedPriceListsInfo(http: HttpClient, rootUrl: string, params?: CompetetiveListGetAcceptedPriceListsInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetAcceptedPriceListsInfo.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfAcceptedPriceListsExtendedResultAltDto>;
    })
  );
}

competetiveListGetAcceptedPriceListsInfo.PATH = '/market/api/v1/competetivelist/acceptedPriceListsNewFlow';
