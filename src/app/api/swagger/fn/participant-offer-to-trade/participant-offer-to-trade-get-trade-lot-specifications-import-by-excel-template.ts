/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfGuid } from '../../models/api-market-json-result-of-guid';

export interface ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params {
  tradeId: number;
}

export function participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfGuid>;
    })
  );
}

participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate.PATH = '/bla-bla-vla/offerToTrade/{tradeId}/participant-offers/excel/import/specifications/template';
