/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiImportedResultsAltDto } from '../../models/api-imported-results';
import { ApiParticipantOfferFromFileDto } from '../../models/api-participant-offer-from-file-dto';

export interface ParticipantOfferLoadDataFromDocument$Params {
      body?: ApiParticipantOfferFromFileDto | null
}

export function participantOfferLoadDataFromDocument(http: HttpClient, rootUrl: string, params?: ParticipantOfferLoadDataFromDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiImportedResultsAltDto>> {
  const rb = new RequestBuilder(rootUrl, participantOfferLoadDataFromDocument.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiImportedResultsAltDto>;
    })
  );
}

participantOfferLoadDataFromDocument.PATH = '/api/participantoffer/LoadDataFromDocument';
