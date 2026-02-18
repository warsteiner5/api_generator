/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealTerminateModelAltDto } from '../../models/api-deal-terminate-model';
import { ApiMarketJsonResultOfMarketFullDealDto } from '../../models/api-market-json-result-of-market-full-deal-dto';

export interface DealsSetDealTerminated$Params {
  dealId: number;
      body?: ApiDealTerminateModelAltDto | null
}

export function dealsSetDealTerminated(http: HttpClient, rootUrl: string, params: DealsSetDealTerminated$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>> {
  const rb = new RequestBuilder(rootUrl, dealsSetDealTerminated.PATH, 'post');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>;
    })
  );
}

dealsSetDealTerminated.PATH = '/bla-bla-vla/deals/{dealId}/customers/terminate';
