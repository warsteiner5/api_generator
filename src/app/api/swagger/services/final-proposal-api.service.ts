/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { finalProposalGetFinalProposal } from '../fn/final-proposal/final-proposal-get-final-proposal';
import { FinalProposalGetFinalProposal$Params } from '../fn/final-proposal/final-proposal-get-final-proposal';
import { finalProposalSaveFinalProposal } from '../fn/final-proposal/final-proposal-save-final-proposal';
import { FinalProposalSaveFinalProposal$Params } from '../fn/final-proposal/final-proposal-save-final-proposal';
import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfQuotationSessionFinalProposal } from '../models/api-market-json-result-of-quotation-session-final-proposal';

@Injectable({ providedIn: 'root' })
export class FinalProposalApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `finalProposalGetFinalProposal()` */
  static readonly FinalProposalGetFinalProposalPath = '/bla-bla-vla/final-proposal/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finalProposalGetFinalProposal()` instead.
   *
   * This method doesn't expect any request body.
   */
  finalProposalGetFinalProposal$Response(params: FinalProposalGetFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposal>> {
    return finalProposalGetFinalProposal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `finalProposalGetFinalProposal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  finalProposalGetFinalProposal(params: FinalProposalGetFinalProposal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionFinalProposal> {
    return this.finalProposalGetFinalProposal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposal>): ApiMarketJsonResultOfQuotationSessionFinalProposal => r.body)
    );
  }

  /** Path part for operation `finalProposalSaveFinalProposal()` */
  static readonly FinalProposalSaveFinalProposalPath = '/bla-bla-vla/final-proposal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finalProposalSaveFinalProposal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  finalProposalSaveFinalProposal$Response(params?: FinalProposalSaveFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return finalProposalSaveFinalProposal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `finalProposalSaveFinalProposal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  finalProposalSaveFinalProposal(params?: FinalProposalSaveFinalProposal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.finalProposalSaveFinalProposal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

}
