/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCreateOrganizationByDictionaryServiceDto } from '../../models/api-create-organization-by-dictionary-service-dto';

export interface OrganizationsCreateOrganization$Params {
      body?: ApiCreateOrganizationByDictionaryServiceDto | null
}

export function organizationsCreateOrganization(http: HttpClient, rootUrl: string, params?: OrganizationsCreateOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationsCreateOrganization.PATH, 'post');
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

organizationsCreateOrganization.PATH = '/bla-bla-vla/organizations/CreateOrganization';
