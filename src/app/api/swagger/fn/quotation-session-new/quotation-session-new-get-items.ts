/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-quotation-session-item-dto';

export interface QuotationSessionNewGetItems$Params {
  tradeGuid: string;
  pageNumber: number;
  pageSize: number;
}

export function quotationSessionNewGetItems(http: HttpClient, rootUrl: string, params: QuotationSessionNewGetItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionNewGetItems.PATH, 'get');
  if (params) {
    rb.path('tradeGuid', params.tradeGuid, {});
    rb.query('pageNumber', params.pageNumber, {});
    rb.query('pageSize', params.pageSize, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>;
    })
  );
}

quotationSessionNewGetItems.PATH = '/bla-bla-vla/quotation-session-new/{tradeGuid}/items';
