/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrgSettingNameEnum } from '../../models/api-org-setting-name-enum';

export interface OrgSettingGetBoolOrgSetting$Params {
  organizationId: number;
  settingName: ApiOrgSettingNameEnum;
}

export function orgSettingGetBoolOrgSetting(http: HttpClient, rootUrl: string, params: OrgSettingGetBoolOrgSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, orgSettingGetBoolOrgSetting.PATH, 'get');
  if (params) {
    rb.path('organizationId', params.organizationId, {});
    rb.path('settingName', params.settingName, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

orgSettingGetBoolOrgSetting.PATH = '/api/OrgSetting/bool/{organizationId}/{settingName}';
