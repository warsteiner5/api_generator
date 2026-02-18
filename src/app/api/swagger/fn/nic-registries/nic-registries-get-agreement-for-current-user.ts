/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface NicRegistriesGetAgreementForCurrentUser$Params {
}

export function nicRegistriesGetAgreementForCurrentUser(http: HttpClient, rootUrl: string, params?: NicRegistriesGetAgreementForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<string | null>> {
  const rb = new RequestBuilder(rootUrl, nicRegistriesGetAgreementForCurrentUser.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string | null>;
    })
  );
}

nicRegistriesGetAgreementForCurrentUser.PATH = '/bla-bla-vla/NicRegistry/agreement';
