/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDealExtendedInfoAltDto } from '../../models/api-market-json-result-of-deal-extended-info';

export interface DealsGetDealExtendedInfo$Params {
  dealId: number;
}

export function dealsGetDealExtendedInfo(http: HttpClient, rootUrl: string, params: DealsGetDealExtendedInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealExtendedInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetDealExtendedInfo.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDealExtendedInfoAltDto>;
    })
  );
}

dealsGetDealExtendedInfo.PATH = '/market/api/v1/deals/{dealId}/ExtendedInfo';
