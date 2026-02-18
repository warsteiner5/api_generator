/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto } from '../../models/api-market-json-result-of-competitive-list-item-for-participant-offer-template-dto';

export interface CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params {
  id: number;
}

export function competetiveListGetCompetitiveListItemForParticipantOfferTemplate(http: HttpClient, rootUrl: string, params: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto>> {
  const rb = new RequestBuilder(rootUrl, competetiveListGetCompetitiveListItemForParticipantOfferTemplate.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCompetitiveListItemForParticipantOfferTemplateDto>;
    })
  );
}

competetiveListGetCompetitiveListItemForParticipantOfferTemplate.PATH = '/bla-bla-vla/competetivelist/GetCompetitiveListItemForParticipantOfferTemplate/{id}';
