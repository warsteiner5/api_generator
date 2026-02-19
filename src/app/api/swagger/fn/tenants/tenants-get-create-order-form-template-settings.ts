/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfFormTemplateDto } from '../../models/api-market-json-result-of-form-template-dto';

export interface TenantsGetCreateOrderFormTemplateSettings$Params {
}

export function tenantsGetCreateOrderFormTemplateSettings(http: HttpClient, rootUrl: string, params?: TenantsGetCreateOrderFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
  const rb = new RequestBuilder(rootUrl, tenantsGetCreateOrderFormTemplateSettings.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>;
    })
  );
}

tenantsGetCreateOrderFormTemplateSettings.PATH = '/market/api/v1/tenants/order-template';
