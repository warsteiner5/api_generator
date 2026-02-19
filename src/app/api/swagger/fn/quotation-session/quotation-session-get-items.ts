/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-quotation-session-item-dto';

export interface QuotationSessionGetItems$Params {
  id: number;
  pageNumber: number;
  pageSize: number;
}

export function quotationSessionGetItems(http: HttpClient, rootUrl: string, params: QuotationSessionGetItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfQuotationSessionItemDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionGetItems.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

quotationSessionGetItems.PATH = '/market/api/v1/quotation-session/{id}/items';
