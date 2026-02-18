/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiMarketVipAnalyticsPurchaseReportRequestAltDto } from '../../models/api-market-vip-analytics-purchase-report-request';

export interface ReportsGeneratePurchaseReport$Params {
      body?: ApiMarketVipAnalyticsPurchaseReportRequestAltDto | null
}

export function reportsGeneratePurchaseReport(http: HttpClient, rootUrl: string, params?: ReportsGeneratePurchaseReport$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, reportsGeneratePurchaseReport.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

reportsGeneratePurchaseReport.PATH = '/bla-bla-vla/reports/purchase';
