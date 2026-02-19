/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEisIntegrationSendDealDto } from '../../models/api-eis-integration-send-deal-dto';
import { ApiMarketJsonVoidResultAltDto } from '../../models/api-market-json-void-result';

export interface DealsSaveDealEisDataDraft$Params {
      body?: ApiEisIntegrationSendDealDto | null
}

export function dealsSaveDealEisDataDraft(http: HttpClient, rootUrl: string, params?: DealsSaveDealEisDataDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSaveDealEisDataDraft.PATH, 'post');
  if (params) {
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

dealsSaveDealEisDataDraft.PATH = '/market/api/v1/deals/save/eis/draft';
