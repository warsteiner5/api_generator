/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBooleanAltDto } from '../../models/api-market-json-result-of-boolean';
import { ApiMarketOrganizationProfileAppearanceDto } from '../../models/api-market-organization-profile-appearance-dto';

export interface OrganizationProfilesUpdateProfileAppearance$Params {
      body?: ApiMarketOrganizationProfileAppearanceDto | null
}

export function organizationProfilesUpdateProfileAppearance(http: HttpClient, rootUrl: string, params?: OrganizationProfilesUpdateProfileAppearance$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
  const rb = new RequestBuilder(rootUrl, organizationProfilesUpdateProfileAppearance.PATH, 'post');
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

organizationProfilesUpdateProfileAppearance.PATH = '/market/api/v1/organization-profiles/my/appearance';
