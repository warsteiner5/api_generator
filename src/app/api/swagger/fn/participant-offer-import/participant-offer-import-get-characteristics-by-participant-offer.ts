/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiCharacteristicDto } from '../../models/api-characteristic-dto';

export interface ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params {
  id: number;
}

export function participantOfferImportGetCharacteristicsByParticipantOffer(http: HttpClient, rootUrl: string, params: ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiCharacteristicDto>>> {
  const rb = new RequestBuilder(rootUrl, participantOfferImportGetCharacteristicsByParticipantOffer.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiCharacteristicDto>>;
    })
  );
}

participantOfferImportGetCharacteristicsByParticipantOffer.PATH = '/market/api/v1/offerimport/characteristics/{id}';
