/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealInfoRequestDto } from '../../models/api-deal-info-request-dto';
import { ApiMarketJsonResultOfDealHashToSignDto } from '../../models/api-market-json-result-of-deal-hash-to-sign-dto';

export interface DealsGetDataToSignByCustomerForDeal$Params {
      body?: ApiDealInfoRequestDto | null
}

export function dealsGetDataToSignByCustomerForDeal(http: HttpClient, rootUrl: string, params?: DealsGetDataToSignByCustomerForDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealHashToSignDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetDataToSignByCustomerForDeal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfDealHashToSignDto>;
    })
  );
}

dealsGetDataToSignByCustomerForDeal.PATH = '/bla-bla-vla/deals/customers/data_to_sign';
