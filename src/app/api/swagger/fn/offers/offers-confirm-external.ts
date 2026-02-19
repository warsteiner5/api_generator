/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiExternalPublishParticipantOfferDto } from '../../models/api-external-publish-participant-offer-dto';

export interface OffersConfirmExternal$Params {
      body?: ApiExternalPublishParticipantOfferDto | null
}

export function offersConfirmExternal(http: HttpClient, rootUrl: string, params?: OffersConfirmExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, offersConfirmExternal.PATH, 'post');
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

offersConfirmExternal.PATH = '/market/api/v1/offers/confirm/external';
