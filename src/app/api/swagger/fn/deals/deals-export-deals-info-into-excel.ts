/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNullableGuid } from '../../models/api-market-json-result-of-nullable-guid';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface DealsExportDealsInfoIntoExcel$Params {
      body?: ApiSearchObjectAltDto | null
}

export function dealsExportDealsInfoIntoExcel(http: HttpClient, rootUrl: string, params?: DealsExportDealsInfoIntoExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNullableGuid>> {
  const rb = new RequestBuilder(rootUrl, dealsExportDealsInfoIntoExcel.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNullableGuid>;
    })
  );
}

dealsExportDealsInfoIntoExcel.PATH = '/bla-bla-vla/deals/export-into-excel';
