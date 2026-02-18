/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOutDocumentDto } from '../../models/api-out-document-dto';

export interface OutDocumentGetOutDocument$Params {
  id: number;
  externalSystemId: number;
}

export function outDocumentGetOutDocument(http: HttpClient, rootUrl: string, params: OutDocumentGetOutDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOutDocumentDto>> {
  const rb = new RequestBuilder(rootUrl, outDocumentGetOutDocument.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('externalSystemId', params.externalSystemId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiOutDocumentDto>;
    })
  );
}

outDocumentGetOutDocument.PATH = '/bla-bla-vla/OutDocument/GetOutDocument/{id}/{externalSystemId}';
