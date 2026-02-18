/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface NicRegistryGetAgreementForCurrentUser$Params {
}

export function nicRegistryGetAgreementForCurrentUser(http: HttpClient, rootUrl: string, params?: NicRegistryGetAgreementForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, nicRegistryGetAgreementForCurrentUser.PATH, 'get');
  if (params) {
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

nicRegistryGetAgreementForCurrentUser.PATH = '/bla-bla-vla/registry/nic/agreement';
