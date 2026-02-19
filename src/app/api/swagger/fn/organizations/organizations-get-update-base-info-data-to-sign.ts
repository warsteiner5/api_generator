/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSignAltDto } from '../../models/api-market-json-result-of-update-organization-base-info-data-to-sign';
import { ApiUpdateOrganizationBaseInfoRequestAltDto } from '../../models/api-update-organization-base-info-request';

export interface OrganizationsGetUpdateBaseInfoDataToSign$Params {
      body?: ApiUpdateOrganizationBaseInfoRequestAltDto | null
}

export function organizationsGetUpdateBaseInfoDataToSign(http: HttpClient, rootUrl: string, params?: OrganizationsGetUpdateBaseInfoDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSignAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetUpdateBaseInfoDataToSign.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSignAltDto>;
    })
  );
}

organizationsGetUpdateBaseInfoDataToSign.PATH = '/market/api/v1/organizations/my/base-info';
