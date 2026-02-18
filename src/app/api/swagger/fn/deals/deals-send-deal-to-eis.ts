/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiEisIntegrationSendDealDto } from '../../models/api-eis-integration-send-deal-dto';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../../models/api-market-json-result-of-eis-integration-result-dto';

export interface DealsSendDealToEis$Params {
      body?: ApiEisIntegrationSendDealDto | null
}

export function dealsSendDealToEis(http: HttpClient, rootUrl: string, params?: DealsSendDealToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSendDealToEis.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>;
    })
  );
}

dealsSendDealToEis.PATH = '/bla-bla-vla/deals/send_to_eis';
