/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-organization-document-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface DocumentsGetMyDocuments$Params {
      body?: ApiSearchObjectAltDto | null
}

export function documentsGetMyDocuments(http: HttpClient, rootUrl: string, params?: DocumentsGetMyDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto>> {
  const rb = new RequestBuilder(rootUrl, documentsGetMyDocuments.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto>;
    })
  );
}

documentsGetMyDocuments.PATH = '/market/api/v1/documents/my';
