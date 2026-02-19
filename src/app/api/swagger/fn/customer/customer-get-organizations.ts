/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CustomerGetOrganizations$Params {
  innOrName: string | null;
  useName: boolean;
}

export function customerGetOrganizations(http: HttpClient, rootUrl: string, params: CustomerGetOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, customerGetOrganizations.PATH, 'get');
  if (params) {
    rb.query('innOrName', params.innOrName, {});
    rb.query('useName', params.useName, {});
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

customerGetOrganizations.PATH = '/api/Organizations';
