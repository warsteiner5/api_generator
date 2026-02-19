/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfRegulationDocumentTypeViewDto } from '../../models/api-market-json-result-of-regulation-document-type-view-dto';

export interface RegulationGetDocumentType$Params {
  id: number;
}

export function regulationGetDocumentType(http: HttpClient, rootUrl: string, params: RegulationGetDocumentType$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDto>> {
  const rb = new RequestBuilder(rootUrl, regulationGetDocumentType.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDto>;
    })
  );
}

regulationGetDocumentType.PATH = '/market/api/v1/regulation/{id}/type';
