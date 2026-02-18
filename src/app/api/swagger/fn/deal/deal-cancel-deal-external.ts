/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealInfoForCancellationAltDto } from '../../models/api-deal-info-for-cancellation';

export interface DealCancelDealExternal$Params {
      body?: ApiDealInfoForCancellationAltDto | null
}

export function dealCancelDealExternal(http: HttpClient, rootUrl: string, params?: DealCancelDealExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, dealCancelDealExternal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

dealCancelDealExternal.PATH = '/bla-bla-vla/Deal/CancelDeal/External';
