/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface LogGetBusinessOperationLogHistoryExcel$Params {
      body?: ApiSearchObjectAltDto | null
}

export function logGetBusinessOperationLogHistoryExcel(http: HttpClient, rootUrl: string, params?: LogGetBusinessOperationLogHistoryExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, logGetBusinessOperationLogHistoryExcel.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

logGetBusinessOperationLogHistoryExcel.PATH = '/bla-bla-vla/log/trade/export';
