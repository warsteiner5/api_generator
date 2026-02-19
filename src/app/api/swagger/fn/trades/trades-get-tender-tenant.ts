/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfIntegerAltDto } from '../../models/api-market-json-result-of-list-of-integer';

export interface TradesGetTenderTenant$Params {
  id: number;
}

export function tradesGetTenderTenant(http: HttpClient, rootUrl: string, params: TradesGetTenderTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTenderTenant.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfIntegerAltDto>;
    })
  );
}

tradesGetTenderTenant.PATH = '/market/api/v1/trades/{id}/tenants';
