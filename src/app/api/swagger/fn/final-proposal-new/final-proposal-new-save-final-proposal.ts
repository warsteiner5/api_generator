/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIntegerAltDto } from '../../models/api-market-json-result-of-integer';
import { ApiQuotationSessionFinalProposalNewAltDto } from '../../models/api-quotation-session-final-proposal-new';

export interface FinalProposalNewSaveFinalProposal$Params {
      body?: ApiQuotationSessionFinalProposalNewAltDto | null
}

export function finalProposalNewSaveFinalProposal(http: HttpClient, rootUrl: string, params?: FinalProposalNewSaveFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
  const rb = new RequestBuilder(rootUrl, finalProposalNewSaveFinalProposal.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>;
    })
  );
}

finalProposalNewSaveFinalProposal.PATH = '/market/api/v1/final-proposal-new';
