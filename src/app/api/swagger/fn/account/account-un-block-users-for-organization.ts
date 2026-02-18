/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AccountUnBlockUsersForOrganization$Params {
      body?: Array<string> | null
}

export function accountUnBlockUsersForOrganization(http: HttpClient, rootUrl: string, params?: AccountUnBlockUsersForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, accountUnBlockUsersForOrganization.PATH, 'post');
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

accountUnBlockUsersForOrganization.PATH = '/bla-bla-vla/Account/UnBlockUsersForOrganization';
