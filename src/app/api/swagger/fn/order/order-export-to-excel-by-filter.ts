/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExportFilesStatusAltDto } from '../../models/api-export-files-status';
import { ApiOrderFilterObjectForCustomerAltDto } from '../../models/api-order-filter-object-for-customer';

export interface OrderExportToExcelByFilter$Params {
      body?: ApiOrderFilterObjectForCustomerAltDto | null
}

export function orderExportToExcelByFilter(http: HttpClient, rootUrl: string, params?: OrderExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExportFilesStatusAltDto>> {
  const rb = new RequestBuilder(rootUrl, orderExportToExcelByFilter.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiExportFilesStatusAltDto>;
    })
  );
}

orderExportToExcelByFilter.PATH = '/bla-bla-vla/order/ExportToExcelByFilter';
