/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionFinalProposal } from '../../models/api-market-json-result-of-quotation-session-final-proposal';

export interface FinalProposalGetFinalProposal$Params {
  tradeId: number;
}

export function finalProposalGetFinalProposal(http: HttpClient, rootUrl: string, params: FinalProposalGetFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposal>> {
  const rb = new RequestBuilder(rootUrl, finalProposalGetFinalProposal.PATH, 'get');
  if (params) {
    rb.path('tradeId', params.tradeId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposal>;
    })
  );
}

finalProposalGetFinalProposal.PATH = '/bla-bla-vla/final-proposal/{tradeId}';
