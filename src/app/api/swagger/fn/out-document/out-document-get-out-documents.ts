/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiApiSearchResultOfOutDocumentDto } from '../../models/api-api-search-result-of-out-document-dto';
import { ApiOutDocumentFilterDto } from '../../models/api-out-document-filter-dto';

export interface OutDocumentGetOutDocuments$Params {
      body?: ApiOutDocumentFilterDto | null
}

export function outDocumentGetOutDocuments(http: HttpClient, rootUrl: string, params?: OutDocumentGetOutDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOutDocumentDto>> {
  const rb = new RequestBuilder(rootUrl, outDocumentGetOutDocuments.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiApiSearchResultOfOutDocumentDto>;
    })
  );
}

outDocumentGetOutDocuments.PATH = '/api/OutDocument/GetOutDocuments';
