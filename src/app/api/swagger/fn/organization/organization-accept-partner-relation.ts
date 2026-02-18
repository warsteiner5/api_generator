/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrganizationAcceptPartnerRelation$Params {
  relationId: number;
}

export function organizationAcceptPartnerRelation(http: HttpClient, rootUrl: string, params: OrganizationAcceptPartnerRelation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationAcceptPartnerRelation.PATH, 'get');
  if (params) {
    rb.query('relationId', params.relationId, {});
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

organizationAcceptPartnerRelation.PATH = '/bla-bla-vla/Organization/AcceptPartnerRelation';
