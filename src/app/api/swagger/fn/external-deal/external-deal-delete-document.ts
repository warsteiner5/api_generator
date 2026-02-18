/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalDealCardDeleteDocumentDto } from '../../models/api-external-deal-card-delete-document-dto';

export interface ExternalDealDeleteDocument$Params {
      body?: ApiExternalDealCardDeleteDocumentDto | null
}

export function externalDealDeleteDocument(http: HttpClient, rootUrl: string, params?: ExternalDealDeleteDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, externalDealDeleteDocument.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

externalDealDeleteDocument.PATH = '/bla-bla-vla/externaldeal/DeleteDocument';
