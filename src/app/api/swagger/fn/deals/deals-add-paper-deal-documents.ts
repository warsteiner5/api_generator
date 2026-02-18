/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiAddPaperDealDocumentRequestAltDto } from '../../models/api-add-paper-deal-document-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface DealsAddPaperDealDocuments$Params {
  id: number;
      body?: ApiAddPaperDealDocumentRequestAltDto | null
}

export function dealsAddPaperDealDocuments(http: HttpClient, rootUrl: string, params: DealsAddPaperDealDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsAddPaperDealDocuments.PATH, 'post');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonVoidResultAltDto>;
    })
  );
}

dealsAddPaperDealDocuments.PATH = '/bla-bla-vla/deals/{id}/paper-documents';
