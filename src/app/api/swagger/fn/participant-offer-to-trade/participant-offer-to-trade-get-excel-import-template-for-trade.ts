/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params {
  tradeId: number;
}

export function participantOfferToTradeGetExcelImportTemplateForTrade(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeGetExcelImportTemplateForTrade.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<string>;
    })
  );
}

participantOfferToTradeGetExcelImportTemplateForTrade.PATH = '/bla-bla-vla/offerToTrade/participant-offers/trade/{tradeId}/excel/import/template';
