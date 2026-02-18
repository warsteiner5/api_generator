/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ApplicationRevoke$Params {
  applicationId: number;
}

export function applicationRevoke(http: HttpClient, rootUrl: string, params: ApplicationRevoke$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
  const rb = new RequestBuilder(rootUrl, applicationRevoke.PATH, 'post');
  if (params) {
    rb.path('applicationId', params.applicationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
    })
  );
}

applicationRevoke.PATH = '/bla-bla-vla/Applications/{applicationId}/Revoke';
