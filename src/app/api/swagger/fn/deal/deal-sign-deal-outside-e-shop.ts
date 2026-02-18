/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFullDealDto } from '../../models/api-full-deal-dto';

export interface DealSignDealOutsideEShop$Params {
      body?: ApiFullDealDto | null
}

export function dealSignDealOutsideEShop(http: HttpClient, rootUrl: string, params?: DealSignDealOutsideEShop$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
  const rb = new RequestBuilder(rootUrl, dealSignDealOutsideEShop.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
    })
  );
}

dealSignDealOutsideEShop.PATH = '/bla-bla-vla/Deal/SignDealOutsideEShop';
