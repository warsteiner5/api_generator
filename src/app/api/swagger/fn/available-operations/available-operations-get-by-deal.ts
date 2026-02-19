/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfApplicationAvailableOperationDto } from '../../models/api-market-json-result-of-application-available-operation-dto';

export interface AvailableOperationsGetByDeal$Params {
  dealId: number;
}

export function availableOperationsGetByDeal(http: HttpClient, rootUrl: string, params: AvailableOperationsGetByDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationAvailableOperationDto>> {
  const rb = new RequestBuilder(rootUrl, availableOperationsGetByDeal.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
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

availableOperationsGetByDeal.PATH = '/market/api/v1/available-operations/deal/{dealId}';
