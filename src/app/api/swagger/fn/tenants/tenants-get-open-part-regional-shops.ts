/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOpenPartDistrictDtoOf } from '../../models/api-market-json-result-of-open-part-district-dto-of';

export interface TenantsGetOpenPartRegionalShops$Params {
}

export function tenantsGetOpenPartRegionalShops(http: HttpClient, rootUrl: string, params?: TenantsGetOpenPartRegionalShops$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOpenPartDistrictDtoOf>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetOpenPartRegionalShops.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOpenPartDistrictDtoOf>;
    })
  );
}

tenantsGetOpenPartRegionalShops.PATH = '/bla-bla-vla/tenants/regional-shops';
