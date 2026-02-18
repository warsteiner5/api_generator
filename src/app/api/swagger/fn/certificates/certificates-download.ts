/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CertificatesDownload$Params {
  thumbprint: string | null;
}

export function certificatesDownload(http: HttpClient, rootUrl: string, params: CertificatesDownload$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, certificatesDownload.PATH, 'get');
  if (params) {
    rb.path('thumbprint', params.thumbprint, {});
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

certificatesDownload.PATH = '/bla-bla-vla/certificates/thumbprint/{thumbprint}/download';
