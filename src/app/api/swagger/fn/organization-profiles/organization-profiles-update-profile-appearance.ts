/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiMarketOrganizationProfileAppearanceDto } from '../../models/api-market-organization-profile-appearance-dto';

export interface OrganizationProfilesUpdateProfileAppearance$Params {
      body?: ApiMarketOrganizationProfileAppearanceDto | null
}

export function organizationProfilesUpdateProfileAppearance(http: HttpClient, rootUrl: string, params?: OrganizationProfilesUpdateProfileAppearance$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, organizationProfilesUpdateProfileAppearance.PATH, 'post');
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

organizationProfilesUpdateProfileAppearance.PATH = '/bla-bla-vla/organization-profiles/my/appearance';
