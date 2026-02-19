/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketOrganizationSettingsAltDto } from '../../models/api-market-json-result-of-market-organization-settings';

export interface OrganizationPurchasePrefsGetPurchaseSettings$Params {
}

export function organizationPurchasePrefsGetPurchaseSettings(http: HttpClient, rootUrl: string, params?: OrganizationPurchasePrefsGetPurchaseSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationSettingsAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationPurchasePrefsGetPurchaseSettings.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationSettingsAltDto>;
    })
  );
}

organizationPurchasePrefsGetPurchaseSettings.PATH = '/market/api/v1/organization/purchase-settings/my';
