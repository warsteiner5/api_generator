/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfDealRejectionReasonDto } from '../../models/api-market-json-result-of-list-of-deal-rejection-reason-dto';

export interface TenantsGetDealRejectReasons$Params {
  id: number;
}

export function tenantsGetDealRejectReasons(http: HttpClient, rootUrl: string, params: TenantsGetDealRejectReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDealRejectionReasonDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetDealRejectReasons.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfDealRejectionReasonDto>;
    })
  );
}

tenantsGetDealRejectReasons.PATH = '/bla-bla-vla/tenants/GetDealRejectReasons';
