/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiHideApplicationSettingsDto } from '../../models/api-hide-application-settings-dto';
import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';

export interface OrganizationPurchasePrefsSetHideApplicationData$Params {
      body?: ApiHideApplicationSettingsDto | null
}

export function organizationPurchasePrefsSetHideApplicationData(http: HttpClient, rootUrl: string, params?: OrganizationPurchasePrefsSetHideApplicationData$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationPurchasePrefsSetHideApplicationData.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>;
    })
  );
}

organizationPurchasePrefsSetHideApplicationData.PATH = '/market/api/v1/organization/purchase-settings/my/hide-application';
