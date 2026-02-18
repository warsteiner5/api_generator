/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DealDownloadSpecification$Params {
  dealId: number;
  applicationId: number;
}

export function dealDownloadSpecification(http: HttpClient, rootUrl: string, params: DealDownloadSpecification$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dealDownloadSpecification.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
    rb.path('applicationId', params.applicationId, {});
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

dealDownloadSpecification.PATH = '/bla-bla-vla/Deal/{dealId}/application/{applicationId}/download/specification';
