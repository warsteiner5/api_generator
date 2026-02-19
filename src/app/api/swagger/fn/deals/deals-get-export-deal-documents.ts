/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfNullableGuidAltDto } from '../../models/api-market-json-result-of-nullable-guid';

export interface DealsGetExportDealDocuments$Params {
  id: number;
  tradeId: number;
}

export function dealsGetExportDealDocuments(http: HttpClient, rootUrl: string, params: DealsGetExportDealDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNullableGuidAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetExportDealDocuments.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
    rb.query('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfNullableGuidAltDto>;
    })
  );
}

dealsGetExportDealDocuments.PATH = '/market/api/v1/deals/export_documents';
