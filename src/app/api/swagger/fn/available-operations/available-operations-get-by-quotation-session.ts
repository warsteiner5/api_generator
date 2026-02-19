/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionAvailableOperationDto } from '../../models/api-market-json-result-of-quotation-session-available-operation-dto';

export interface AvailableOperationsGetByQuotationSession$Params {
  tradeId: number;
}

export function availableOperationsGetByQuotationSession(http: HttpClient, rootUrl: string, params: AvailableOperationsGetByQuotationSession$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAvailableOperationDto>> {
  const rb = new RequestBuilder(rootUrl, availableOperationsGetByQuotationSession.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionAvailableOperationDto>;
    })
  );
}

availableOperationsGetByQuotationSession.PATH = '/market/api/v1/available-operations/trade/{tradeId}/quotation-session';
