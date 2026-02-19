/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params {
  tenantId: number;
}

export function signedOutOfEpReasonsGetSignedOutOfEpReasons(http: HttpClient, rootUrl: string, params: SignedOutOfEpReasonsGetSignedOutOfEpReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, signedOutOfEpReasonsGetSignedOutOfEpReasons.PATH, 'get');
  if (params) {
    rb.query('tenantId', params.tenantId, {});
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

signedOutOfEpReasonsGetSignedOutOfEpReasons.PATH = '/api/signedoutofepreasons';
