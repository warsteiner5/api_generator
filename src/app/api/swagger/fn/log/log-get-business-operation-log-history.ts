/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-market-business-operation-log-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface LogGetBusinessOperationLogHistory$Params {
      body?: ApiSearchObjectAltDto | null
}

export function logGetBusinessOperationLogHistory(http: HttpClient, rootUrl: string, params?: LogGetBusinessOperationLogHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto>> {
  const rb = new RequestBuilder(rootUrl, logGetBusinessOperationLogHistory.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketBusinessOperationLogDto>;
    })
  );
}

logGetBusinessOperationLogHistory.PATH = '/market/api/v1/log/trade/search';
