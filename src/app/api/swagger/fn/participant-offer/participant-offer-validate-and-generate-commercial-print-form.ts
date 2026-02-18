/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiParticipantOfferDto } from '../../models/api-participant-offer-dto';

export interface ParticipantOfferValidateAndGenerateCommercialPrintForm$Params {
      body?: ApiParticipantOfferDto | null
}

export function participantOfferValidateAndGenerateCommercialPrintForm(http: HttpClient, rootUrl: string, params?: ParticipantOfferValidateAndGenerateCommercialPrintForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantOfferValidateAndGenerateCommercialPrintForm.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

participantOfferValidateAndGenerateCommercialPrintForm.PATH = '/bla-bla-vla/participantoffer/ValidateAndGenerateCommercialPrintForm';
