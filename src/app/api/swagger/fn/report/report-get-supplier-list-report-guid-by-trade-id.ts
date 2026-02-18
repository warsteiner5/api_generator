/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiSuppliersListReportDto } from '../../models/api-suppliers-list-report-dto';

export interface ReportGetSupplierListReportGuidByTradeId$Params {
  tradeId: number;
}

export function reportGetSupplierListReportGuidByTradeId(http: HttpClient, rootUrl: string, params: ReportGetSupplierListReportGuidByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiSuppliersListReportDto>> {
  const rb = new RequestBuilder(rootUrl, reportGetSupplierListReportGuidByTradeId.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiSuppliersListReportDto>;
    })
  );
}

reportGetSupplierListReportGuidByTradeId.PATH = '/bla-bla-vla/reports/{tradeId}/suppliersListReportGuid';
