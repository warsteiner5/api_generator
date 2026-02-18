/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CompetetiveListAddParticipantOfferToCompetitiveListItem$Params {
  competitiveListId: number;
  priceListId: number;
  requirementRequestId: number;
}

export function competetiveListAddParticipantOfferToCompetitiveListItem(http: HttpClient, rootUrl: string, params: CompetetiveListAddParticipantOfferToCompetitiveListItem$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, competetiveListAddParticipantOfferToCompetitiveListItem.PATH, 'get');
  if (params) {
    rb.query('competitiveListId', params.competitiveListId, {});
    rb.query('priceListId', params.priceListId, {});
    rb.query('requirementRequestId', params.requirementRequestId, {});
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

competetiveListAddParticipantOfferToCompetitiveListItem.PATH = '/bla-bla-vla/competetivelist/attachPriceList';
