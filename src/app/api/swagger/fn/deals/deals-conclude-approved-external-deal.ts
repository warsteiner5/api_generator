/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiSignatureForDealDto } from '../../models/api-signature-for-deal-dto';

export interface DealsConcludeApprovedExternalDeal$Params {
  dealId: number;
  organizationId: number;
  userId: number;
      body?: ApiSignatureForDealDto | null
}

export function dealsConcludeApprovedExternalDeal(http: HttpClient, rootUrl: string, params: DealsConcludeApprovedExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, dealsConcludeApprovedExternalDeal.PATH, 'post');
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
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

dealsConcludeApprovedExternalDeal.PATH = '/bla-bla-vla/deals/{dealId}/customers/{organizationId}/users/{userId}/conclude/external';
