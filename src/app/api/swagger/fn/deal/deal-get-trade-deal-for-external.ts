/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealInfoDto } from '../../models/api-external-deal-info-dto';

export interface DealGetTradeDealForExternal$Params {
  id: number;
  externalSystemId: number;
}

export function dealGetTradeDealForExternal(http: HttpClient, rootUrl: string, params: DealGetTradeDealForExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealInfoDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetTradeDealForExternal.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('externalSystemId', params.externalSystemId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiExternalDealInfoDto>;
    })
  );
}

dealGetTradeDealForExternal.PATH = '/api/Deal/GetTradeDealEx/{id}/{externalSystemId}';
