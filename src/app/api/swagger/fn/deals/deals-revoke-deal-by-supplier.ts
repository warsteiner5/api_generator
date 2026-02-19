/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';
import { ApiRevokeDealBySupplierRequestAltDto } from '../../models/api-revoke-deal-by-supplier-request';

export interface DealsRevokeDealBySupplier$Params {
  id: number;
      body?: ApiRevokeDealBySupplierRequestAltDto | null
}

export function dealsRevokeDealBySupplier(http: HttpClient, rootUrl: string, params: DealsRevokeDealBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsRevokeDealBySupplier.PATH, 'post');
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

dealsRevokeDealBySupplier.PATH = '/market/api/v1/deals/{id}/participant/revoke';
