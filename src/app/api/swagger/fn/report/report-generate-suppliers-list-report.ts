/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiReportSuppliersListParametersAltDto } from '../../models/api-report-suppliers-list-parameters';

export interface ReportGenerateSuppliersListReport$Params {
      body?: ApiReportSuppliersListParametersAltDto | null
}

export function reportGenerateSuppliersListReport(http: HttpClient, rootUrl: string, params?: ReportGenerateSuppliersListReport$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, reportGenerateSuppliersListReport.PATH, 'post');
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

reportGenerateSuppliersListReport.PATH = '/bla-bla-vla/reports/suppliersList';
