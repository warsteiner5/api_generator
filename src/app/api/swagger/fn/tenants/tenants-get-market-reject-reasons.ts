/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfApplicationRejectionReasonDto } from '../../models/api-market-json-result-of-list-of-application-rejection-reason-dto';

export interface TenantsGetMarketRejectReasons$Params {
  id: number;
}

export function tenantsGetMarketRejectReasons(http: HttpClient, rootUrl: string, params: TenantsGetMarketRejectReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfApplicationRejectionReasonDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetMarketRejectReasons.PATH, 'get');
  if (params) {
    rb.query('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfApplicationRejectionReasonDto>;
    })
  );
}

tenantsGetMarketRejectReasons.PATH = '/market/api/v1/tenants/GetApplicationRejectReasons';
