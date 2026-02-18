/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-deal-list-item-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface DealsGetDeals2$Params {
      body?: ApiSearchObjectAltDto | null
}

export function dealsGetDeals2(http: HttpClient, rootUrl: string, params?: DealsGetDeals2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetDeals2.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto>;
    })
  );
}

dealsGetDeals2.PATH = '/bla-bla-vla/deals/search';
