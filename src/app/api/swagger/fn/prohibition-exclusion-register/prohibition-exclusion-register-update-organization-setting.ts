/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiTenantOrganizationSettingRequestAltDto } from '../../models/api-tenant-organization-setting-request';

export interface ProhibitionExclusionRegisterUpdateOrganizationSetting$Params {
      body?: ApiTenantOrganizationSettingRequestAltDto | null
}

export function prohibitionExclusionRegisterUpdateOrganizationSetting(http: HttpClient, rootUrl: string, params?: ProhibitionExclusionRegisterUpdateOrganizationSetting$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, prohibitionExclusionRegisterUpdateOrganizationSetting.PATH, 'post');
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

prohibitionExclusionRegisterUpdateOrganizationSetting.PATH = '/bla-bla-vla/ProhibitionExclusionRegister/EditSetting';
