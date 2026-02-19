/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf } from '../../models/api-market-json-result-of-regulation-document-type-view-dto-of';

export interface RegulationGetRegulationDocumentTypes$Params {
  showHidden?: boolean;
}

export function regulationGetRegulationDocumentTypes(http: HttpClient, rootUrl: string, params?: RegulationGetRegulationDocumentTypes$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf>> {
  const rb = new RequestBuilder(rootUrl, regulationGetRegulationDocumentTypes.PATH, 'get');
  if (params) {
    rb.query('showHidden', params.showHidden, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfRegulationDocumentTypeViewDtoOf>;
    })
  );
}

regulationGetRegulationDocumentTypes.PATH = '/market/api/v1/regulation/types';
