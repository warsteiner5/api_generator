/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOpenPartCorporateShopDtoOf } from '../../models/api-market-json-result-of-open-part-corporate-shop-dto-of';

export interface TenantsGetOpenPartCorporateShops$Params {
}

export function tenantsGetOpenPartCorporateShops(http: HttpClient, rootUrl: string, params?: TenantsGetOpenPartCorporateShops$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOpenPartCorporateShopDtoOf>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetOpenPartCorporateShops.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOpenPartCorporateShopDtoOf>;
    })
  );
}

tenantsGetOpenPartCorporateShops.PATH = '/market/api/v1/tenants/corporate-shops';
