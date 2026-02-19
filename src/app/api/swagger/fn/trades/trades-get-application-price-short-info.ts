/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApplicationPriceShortInfoDto } from '../../models/api-application-price-short-info-dto';

export interface TradesGetApplicationPriceShortInfo$Params {
  applicationId: number;
}

export function tradesGetApplicationPriceShortInfo(http: HttpClient, rootUrl: string, params: TradesGetApplicationPriceShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApplicationPriceShortInfoDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetApplicationPriceShortInfo.PATH, 'get');
  if (params) {
    rb.path('applicationId', params.applicationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApplicationPriceShortInfoDto>;
    })
  );
}

tradesGetApplicationPriceShortInfo.PATH = '/market/api/v1/trades/application/{applicationId}/price';
