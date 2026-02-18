/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealFilterObjectAltDto } from '../../models/api-deal-filter-object';

export interface DealExportToExcelByFilter$Params {
      body?: ApiDealFilterObjectAltDto | null
}

export function dealExportToExcelByFilter(http: HttpClient, rootUrl: string, params?: DealExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dealExportToExcelByFilter.PATH, 'post');
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

dealExportToExcelByFilter.PATH = '/bla-bla-vla/Deal/ExportToExcelByFilter';
