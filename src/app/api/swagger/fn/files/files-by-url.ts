/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiUploadFileByUrlRequestAltDto } from '../../models/api-upload-file-by-url-request';

export interface FilesByUrl$Params {
      body?: ApiUploadFileByUrlRequestAltDto | null
}

export function filesByUrl(http: HttpClient, rootUrl: string, params?: FilesByUrl$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, filesByUrl.PATH, 'post');
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

filesByUrl.PATH = '/market/api/v1/files/uploadByUrl';
