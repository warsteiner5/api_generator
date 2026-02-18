/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfBoolean } from '../../models/api-market-json-result-of-boolean';
import { ApiOrganizationTagDto } from '../../models/api-organization-tag-dto';

export interface OrganizationProfilesUpdateProfileTags$Params {
      body?: Array<ApiOrganizationTagDto> | null
}

export function organizationProfilesUpdateProfileTags(http: HttpClient, rootUrl: string, params?: OrganizationProfilesUpdateProfileTags$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
  const rb = new RequestBuilder(rootUrl, organizationProfilesUpdateProfileTags.PATH, 'post');
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

organizationProfilesUpdateProfileTags.PATH = '/bla-bla-vla/organization-profiles/my/tags';
