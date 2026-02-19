/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantOfferTypeEnum } from '../../models/api-participant-offer-type-enum';

export interface ParticipantOfferGetTemplateForExcelDocument$Params {
  type: ApiParticipantOfferTypeEnum;
}

export function participantOfferGetTemplateForExcelDocument(http: HttpClient, rootUrl: string, params: ParticipantOfferGetTemplateForExcelDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantOfferGetTemplateForExcelDocument.PATH, 'get');
  if (params) {
    rb.path('type', params.type, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

participantOfferGetTemplateForExcelDocument.PATH = '/api/participantoffer/GetTemplateForExcelDocument/{type}';
