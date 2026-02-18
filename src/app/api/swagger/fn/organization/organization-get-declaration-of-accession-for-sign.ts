/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiGetFileInfoForSignDto } from '../../models/api-get-file-info-for-sign-dto';

export interface OrganizationGetDeclarationOfAccessionForSign$Params {
      body?: ApiGetFileInfoForSignDto | null
}

export function organizationGetDeclarationOfAccessionForSign(http: HttpClient, rootUrl: string, params?: OrganizationGetDeclarationOfAccessionForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationGetDeclarationOfAccessionForSign.PATH, 'post');
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

organizationGetDeclarationOfAccessionForSign.PATH = '/bla-bla-vla/Organization/GetDeclarationOfAccessionForSign';
