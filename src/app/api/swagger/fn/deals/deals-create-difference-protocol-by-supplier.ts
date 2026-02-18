/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDifferenceProtocolBySupplierRequestAltDto } from '../../models/api-difference-protocol-by-supplier-request';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface DealsCreateDifferenceProtocolBySupplier$Params {
  id: number;
      body?: ApiDifferenceProtocolBySupplierRequestAltDto | null
}

export function dealsCreateDifferenceProtocolBySupplier(http: HttpClient, rootUrl: string, params: DealsCreateDifferenceProtocolBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsCreateDifferenceProtocolBySupplier.PATH, 'post');
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

dealsCreateDifferenceProtocolBySupplier.PATH = '/bla-bla-vla/deals/{id}/participant/difference-protocol';
