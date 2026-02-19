/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TagsDeleteTagParticipantOfferRule$Params {
  id: number;
}

export function tagsDeleteTagParticipantOfferRule(http: HttpClient, rootUrl: string, params: TagsDeleteTagParticipantOfferRule$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tagsDeleteTagParticipantOfferRule.PATH, 'delete');
  if (params) {
    rb.path('id', params.id, {});
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

tagsDeleteTagParticipantOfferRule.PATH = '/market/api/v1/tags/participant-offer-rule/{id}';
