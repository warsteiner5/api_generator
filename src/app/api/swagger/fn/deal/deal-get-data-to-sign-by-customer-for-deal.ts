/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealHashToSignDto } from '../../models/api-deal-hash-to-sign-dto';
import { ApiDealInfoRequestDto } from '../../models/api-deal-info-request-dto';

export interface DealGetDataToSignByCustomerForDeal$Params {
      body?: ApiDealInfoRequestDto | null
}

export function dealGetDataToSignByCustomerForDeal(http: HttpClient, rootUrl: string, params?: DealGetDataToSignByCustomerForDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiDealHashToSignDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetDataToSignByCustomerForDeal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiDealHashToSignDto>;
    })
  );
}

dealGetDataToSignByCustomerForDeal.PATH = '/bla-bla-vla/Deal/GetDataToSignByCustomerForDeal';
