/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealSigningExpiredMessageParametersAltDto } from '../../models/api-deal-signing-expired-message-parameters';

export interface TradesAddDealSigningExpiredMessage$Params {
      body?: ApiDealSigningExpiredMessageParametersAltDto | null
}

export function tradesAddDealSigningExpiredMessage(http: HttpClient, rootUrl: string, params?: TradesAddDealSigningExpiredMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tradesAddDealSigningExpiredMessage.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

tradesAddDealSigningExpiredMessage.PATH = '/market/api/v1/trades/chat/add-deal-signing-expired-message';
