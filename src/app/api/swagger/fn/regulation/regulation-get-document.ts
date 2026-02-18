/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfRegulationDocumentViewDto } from '../../models/api-market-json-result-of-regulation-document-view-dto';

export interface RegulationGetDocument$Params {
  id: number;
}

export function regulationGetDocument(http: HttpClient, rootUrl: string, params: RegulationGetDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentViewDto>> {
  const rb = new RequestBuilder(rootUrl, regulationGetDocument.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentViewDto>;
    })
  );
}

regulationGetDocument.PATH = '/bla-bla-vla/regulation/{id}/document';
