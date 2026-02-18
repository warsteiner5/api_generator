/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfInformSupplierBeforeApplicationDto } from '../../models/api-market-json-result-of-inform-supplier-before-application-dto';

export interface TenantsGetInformSupplierData$Params {
  tenantId: number;
}

export function tenantsGetInformSupplierData(http: HttpClient, rootUrl: string, params: TenantsGetInformSupplierData$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInformSupplierBeforeApplicationDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetInformSupplierData.PATH, 'get');
  if (params) {
    rb.path('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfInformSupplierBeforeApplicationDto>;
    })
  );
}

tenantsGetInformSupplierData.PATH = '/bla-bla-vla/tenants/inform-supplier-data/{tenantId}';
