/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiOrganizationPurchaseSettingsEisPrefsDto } from '../../models/api-organization-purchase-settings-eis-prefs-dto';

export interface OrganizationPurchasePrefsSetEisPrefs$Params {
      body?: ApiOrganizationPurchaseSettingsEisPrefsDto | null
}

export function organizationPurchasePrefsSetEisPrefs(http: HttpClient, rootUrl: string, params?: OrganizationPurchasePrefsSetEisPrefs$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, organizationPurchasePrefsSetEisPrefs.PATH, 'post');
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

organizationPurchasePrefsSetEisPrefs.PATH = '/bla-bla-vla/organization/purchase-settings/my/eis';
