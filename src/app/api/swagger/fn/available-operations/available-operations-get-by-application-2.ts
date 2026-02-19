/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfApplicationAvailableOperationDto } from '../../models/api-market-json-result-of-application-available-operation-dto';

export interface AvailableOperationsGetByApplication2$Params {
  tradeId: number;
  applicationId: number | null;
}

export function availableOperationsGetByApplication2(http: HttpClient, rootUrl: string, params: AvailableOperationsGetByApplication2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>> {
  const rb = new RequestBuilder(rootUrl, availableOperationsGetByApplication2.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('applicationId', params.applicationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>;
    })
  );
}

availableOperationsGetByApplication2.PATH = '/market/api/v1/available-operations/trade/{tradeId}/application/{applicationId}';
