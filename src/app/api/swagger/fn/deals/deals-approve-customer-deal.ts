/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiSignatureForDealDto } from '../../models/api-signature-for-deal-dto';

export interface DealsApproveCustomerDeal$Params {
      body?: ApiSignatureForDealDto | null
}

export function dealsApproveCustomerDeal(http: HttpClient, rootUrl: string, params?: DealsApproveCustomerDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, dealsApproveCustomerDeal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBoolean>;
    })
  );
}

dealsApproveCustomerDeal.PATH = '/bla-bla-vla/deals/participants/approve';
