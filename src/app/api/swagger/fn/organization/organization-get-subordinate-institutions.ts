/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiPartnersFilterAltDto } from '../../models/api-partners-filter';

export interface OrganizationGetSubordinateInstitutions$Params {
      body?: ApiPartnersFilterAltDto | null
}

export function organizationGetSubordinateInstitutions(http: HttpClient, rootUrl: string, params?: OrganizationGetSubordinateInstitutions$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationGetSubordinateInstitutions.PATH, 'post');
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

organizationGetSubordinateInstitutions.PATH = '/bla-bla-vla/Organization/GetSubordinateInstitutions';
