/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiImportExcelLotItemRequestAltDto } from '../../models/api-import-excel-lot-item-request';
import { ApiImportExcelLotItemResponseAltDto } from '../../models/api-import-excel-lot-item-response';

export interface TradeImportLotItemsFromExcel$Params {
      body?: ApiImportExcelLotItemRequestAltDto | null
}

export function tradeImportLotItemsFromExcel(http: HttpClient, rootUrl: string, params?: TradeImportLotItemsFromExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiImportExcelLotItemResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradeImportLotItemsFromExcel.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiImportExcelLotItemResponseAltDto>;
    })
  );
}

tradeImportLotItemsFromExcel.PATH = '/bla-bla-vla/Trade/importlotitems';
