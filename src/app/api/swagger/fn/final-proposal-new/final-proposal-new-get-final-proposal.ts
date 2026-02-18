/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionFinalProposal } from '../../models/api-market-json-result-of-quotation-session-final-proposal';

export interface FinalProposalNewGetFinalProposal$Params {
  tradeGuid: string;
}

export function finalProposalNewGetFinalProposal(http: HttpClient, rootUrl: string, params: FinalProposalNewGetFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposal>> {
  const rb = new RequestBuilder(rootUrl, finalProposalNewGetFinalProposal.PATH, 'get');
  if (params) {
    rb.path('tradeGuid', params.tradeGuid, {});
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

finalProposalNewGetFinalProposal.PATH = '/bla-bla-vla/final-proposal-new/{tradeGuid}';
