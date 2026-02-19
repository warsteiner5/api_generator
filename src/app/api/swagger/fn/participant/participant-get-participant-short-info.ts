/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ParticipantGetParticipantShortInfo$Params {
  nameOrInn?: string | null;
  id?: string | null;
}

export function participantGetParticipantShortInfo(http: HttpClient, rootUrl: string, params?: ParticipantGetParticipantShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantGetParticipantShortInfo.PATH, 'get');
  if (params) {
    rb.query('nameOrInn', params.nameOrInn, {});
    rb.query('id', params.id, {});
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

participantGetParticipantShortInfo.PATH = '/api/participants/participantshortinfo';
