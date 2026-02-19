/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto } from '../../models/api-market-json-result-of-search-result-of-regulation-document-view-dto';
import { ApiRegulationDocumentFilterAltDto } from '../../models/api-regulation-document-filter';

export interface RegulationGetRegulationDocumentsByFilter$Params {
      body?: ApiRegulationDocumentFilterAltDto | null
}

export function regulationGetRegulationDocumentsByFilter(http: HttpClient, rootUrl: string, params?: RegulationGetRegulationDocumentsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto>> {
  const rb = new RequestBuilder(rootUrl, regulationGetRegulationDocumentsByFilter.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfSearchResultOfRegulationDocumentViewDto>;
    })
  );
}

regulationGetRegulationDocumentsByFilter.PATH = '/market/api/v1/regulation/documents';
