/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIListOfOrgSettingDto } from '../../models/api-market-json-result-of-i-list-of-org-setting-dto';

export interface OrganizationSettingGetOrgSettings$Params {
  tradeBusinessFlow: number;
  orgGuid: string | null;
  tenantId: number;
}

export function organizationSettingGetOrgSettings(http: HttpClient, rootUrl: string, params: OrganizationSettingGetOrgSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>> {
  const rb = new RequestBuilder(rootUrl, organizationSettingGetOrgSettings.PATH, 'get');
  if (params) {
    rb.path('tradeBusinessFlow', params.tradeBusinessFlow, {});
    rb.path('orgGuid', params.orgGuid, {});
    rb.path('tenantId', params.tenantId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIListOfOrgSettingDto>;
    })
  );
}

organizationSettingGetOrgSettings.PATH = '/market/api/v1/tradeBusinessFlow/{tradeBusinessFlow}/org/{orgGuid}/tenant/{tenantId}';
