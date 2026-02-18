/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealFilterObjectAltDto } from '../../models/api-external-deal-filter-object';

export interface ExternalDealExportToExcelByFilter$Params {
      body?: ApiExternalDealFilterObjectAltDto | null
}

export function externalDealExportToExcelByFilter(http: HttpClient, rootUrl: string, params?: ExternalDealExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, externalDealExportToExcelByFilter.PATH, 'post');
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

externalDealExportToExcelByFilter.PATH = '/bla-bla-vla/externaldeal/ExportToExcelByFilter';
