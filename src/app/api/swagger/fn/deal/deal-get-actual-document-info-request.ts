/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiActualDocumentInfoAltDto } from '../../models/api-actual-document-info';
import { ApiGetActualDocumentInfoRequestAltDto } from '../../models/api-get-actual-document-info-request';

export interface DealGetActualDocumentInfoRequest$Params {
      body?: ApiGetActualDocumentInfoRequestAltDto | null
}

export function dealGetActualDocumentInfoRequest(http: HttpClient, rootUrl: string, params?: DealGetActualDocumentInfoRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiActualDocumentInfoAltDto>> {
  const rb = new RequestBuilder(rootUrl, dealGetActualDocumentInfoRequest.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiActualDocumentInfoAltDto>;
    })
  );
}

dealGetActualDocumentInfoRequest.PATH = '/api/Deal/GetActualDocumentInfo';
