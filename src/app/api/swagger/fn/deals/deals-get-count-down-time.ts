/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDealCountdownDto } from '../../models/api-market-json-result-of-deal-countdown-dto';

export interface DealsGetCountDownTime$Params {
  dealId: number;
}

export function dealsGetCountDownTime(http: HttpClient, rootUrl: string, params: DealsGetCountDownTime$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealCountdownDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetCountDownTime.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDealCountdownDto>;
    })
  );
}

dealsGetCountDownTime.PATH = '/market/api/v1/deals/{dealId}/countdown-time';
