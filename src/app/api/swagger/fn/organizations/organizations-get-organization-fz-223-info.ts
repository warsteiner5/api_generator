/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrganizationInfoDto } from '../../models/api-market-json-result-of-organization-info-dto';

export interface OrganizationsGetOrganizationFz223Info$Params {
}

export function organizationsGetOrganizationFz223Info(http: HttpClient, rootUrl: string, params?: OrganizationsGetOrganizationFz223Info$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationInfoDto>> {
  const rb = new RequestBuilder(rootUrl, organizationsGetOrganizationFz223Info.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrganizationInfoDto>;
    })
  );
}

organizationsGetOrganizationFz223Info.PATH = '/market/api/v1/organizations/fz223/info';
