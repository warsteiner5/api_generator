/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiFileSignDto } from '../../models/api-file-sign-dto';

export interface OrganizationSignAndAgreeDeclarationOfAccession$Params {
      body?: ApiFileSignDto | null
}

export function organizationSignAndAgreeDeclarationOfAccession(http: HttpClient, rootUrl: string, params?: OrganizationSignAndAgreeDeclarationOfAccession$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationSignAndAgreeDeclarationOfAccession.PATH, 'post');
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

organizationSignAndAgreeDeclarationOfAccession.PATH = '/bla-bla-vla/Organization/SignAndAgreeDeclarationOfAccession';
