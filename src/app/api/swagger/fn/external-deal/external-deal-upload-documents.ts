/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealCardDocumentDto } from '../../models/api-external-deal-card-document-dto';
import { ApiExternalDealCardDocumentsUploadDto } from '../../models/api-external-deal-card-documents-upload-dto';

export interface ExternalDealUploadDocuments$Params {
      body?: ApiExternalDealCardDocumentsUploadDto | null
}

export function externalDealUploadDocuments(http: HttpClient, rootUrl: string, params?: ExternalDealUploadDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiExternalDealCardDocumentDto>>> {
  const rb = new RequestBuilder(rootUrl, externalDealUploadDocuments.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiExternalDealCardDocumentDto>>;
    })
  );
}

externalDealUploadDocuments.PATH = '/bla-bla-vla/externaldeal/UploadDocuments';
