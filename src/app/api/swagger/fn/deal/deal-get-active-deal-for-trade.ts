/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFullDealDto } from '../../models/api-full-deal-dto';

export interface DealGetActiveDealForTrade$Params {
  id: number;
}

export function dealGetActiveDealForTrade(http: HttpClient, rootUrl: string, params: DealGetActiveDealForTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFullDealDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetActiveDealForTrade.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiFullDealDto>;
    })
  );
}

dealGetActiveDealForTrade.PATH = '/api/Deal/GetActiveDealForTrade/{id}';
