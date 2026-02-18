/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult } from '../../models/api-market-json-result-of-import-excel-application-specifications-result';

export interface ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params {
  tradeId: number;
  fileGuid: string;
}

export function participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel(http: HttpClient, rootUrl: string, params: ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult>> {
  const rb = new RequestBuilder(rootUrl, participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel.PATH, 'post');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
    rb.path('fileGuid', params.fileGuid, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfImportExcelApplicationSpecificationsResult>;
    })
  );
}

participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel.PATH = '/bla-bla-vla/offerToTrade/{tradeId}/participant-offers/excel/import/specifications/{fileGuid}';
