/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTenantOrganizationSettingRequestAltDto } from '../../models/api-tenant-organization-setting-request';

export interface ProhibitionExclusionRegisterCreateOrganizationSetting$Params {
      body?: ApiTenantOrganizationSettingRequestAltDto | null
}

export function prohibitionExclusionRegisterCreateOrganizationSetting(http: HttpClient, rootUrl: string, params?: ProhibitionExclusionRegisterCreateOrganizationSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, prohibitionExclusionRegisterCreateOrganizationSetting.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

prohibitionExclusionRegisterCreateOrganizationSetting.PATH = '/api/ProhibitionExclusionRegister/AddNewSetting';
