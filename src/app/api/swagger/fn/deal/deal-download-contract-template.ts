/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DealDownloadContractTemplate$Params {
  dealId: number;
  applicationId: number;
}

export function dealDownloadContractTemplate(http: HttpClient, rootUrl: string, params: DealDownloadContractTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, dealDownloadContractTemplate.PATH, 'get');
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

dealDownloadContractTemplate.PATH = '/api/Deal/{dealId}/application/{applicationId}/download/contract-template';
