/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiImportExcelProductRequestAltDto } from '../../models/api-import-excel-product-request';
import { ApiMarketJsonResultOfImportExcelProductResponseAltDto } from '../../models/api-market-json-result-of-import-excel-product-response';

export interface TradesImportProductsFromExcelWithGuid$Params {
      body?: ApiImportExcelProductRequestAltDto | null
}

export function tradesImportProductsFromExcelWithGuid(http: HttpClient, rootUrl: string, params?: TradesImportProductsFromExcelWithGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportExcelProductResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesImportProductsFromExcelWithGuid.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfImportExcelProductResponseAltDto>;
    })
  );
}

tradesImportProductsFromExcelWithGuid.PATH = '/market/api/v1/trades/import-products';
