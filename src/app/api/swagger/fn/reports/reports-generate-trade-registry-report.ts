/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTradeRegistryReportParametersAltDto } from '../../models/api-trade-registry-report-parameters';

export interface ReportsGenerateTradeRegistryReport$Params {
      body?: ApiTradeRegistryReportParametersAltDto | null
}

export function reportsGenerateTradeRegistryReport(http: HttpClient, rootUrl: string, params?: ReportsGenerateTradeRegistryReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, reportsGenerateTradeRegistryReport.PATH, 'post');
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

reportsGenerateTradeRegistryReport.PATH = '/bla-bla-vla/reports/trade-registry';
