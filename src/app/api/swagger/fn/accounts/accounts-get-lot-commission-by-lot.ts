/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfDecimalAltDto } from '../../models/api-market-json-result-of-decimal';

export interface AccountsGetLotCommissionByLot$Params {
  lotId: number;
}

export function accountsGetLotCommissionByLot(http: HttpClient, rootUrl: string, params: AccountsGetLotCommissionByLot$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>> {
  const rb = new RequestBuilder(rootUrl, accountsGetLotCommissionByLot.PATH, 'get');
  if (params) {
    rb.path('lotId', params.lotId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDecimalAltDto>;
    })
  );
}

accountsGetLotCommissionByLot.PATH = '/market/api/v1/accounts/lotcommission/{lotId}';
