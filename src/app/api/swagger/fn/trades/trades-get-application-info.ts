/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfApplicationDto } from '../../models/api-market-json-result-of-application-dto';

export interface TradesGetApplicationInfo$Params {
  id: number;
  applicationId: number;
}

export function tradesGetApplicationInfo(http: HttpClient, rootUrl: string, params: TradesGetApplicationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetApplicationInfo.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('applicationId', params.applicationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfApplicationDto>;
    })
  );
}

tradesGetApplicationInfo.PATH = '/market/api/v1/trades/{id}/applications/{applicationId}';
