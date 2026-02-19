/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealInfoForCancellationAltDto } from '../../models/api-deal-info-for-cancellation';
import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';

export interface DealsCancelExternalDeal$Params {
  dealId: number;
  organizationId: number;
  userId: number;
      body?: ApiDealInfoForCancellationAltDto | null
}

export function dealsCancelExternalDeal(http: HttpClient, rootUrl: string, params: DealsCancelExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsCancelExternalDeal.PATH, 'post');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.path('organizationId', params.organizationId, {});
    rb.path('userId', params.userId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

dealsCancelExternalDeal.PATH = '/market/api/v1/deals/{dealId}/customers/{organizationId}/users/{userId}/cancel/external';
