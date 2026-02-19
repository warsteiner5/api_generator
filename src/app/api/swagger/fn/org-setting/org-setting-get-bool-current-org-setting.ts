/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrgSettingNameEnum } from '../../models/api-org-setting-name-enum';

export interface OrgSettingGetBoolCurrentOrgSetting$Params {
  settingName: ApiOrgSettingNameEnum;
}

export function orgSettingGetBoolCurrentOrgSetting(http: HttpClient, rootUrl: string, params: OrgSettingGetBoolCurrentOrgSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, orgSettingGetBoolCurrentOrgSetting.PATH, 'get');
  if (params) {
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

orgSettingGetBoolCurrentOrgSetting.PATH = '/api/OrgSetting/bool/{settingName}';
