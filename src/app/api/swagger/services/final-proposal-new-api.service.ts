/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { finalProposalNewGetFinalProposal } from '../fn/final-proposal-new/final-proposal-new-get-final-proposal';
import { FinalProposalNewGetFinalProposal$Params } from '../fn/final-proposal-new/final-proposal-new-get-final-proposal';
import { finalProposalNewSaveFinalProposal } from '../fn/final-proposal-new/final-proposal-new-save-final-proposal';
import { FinalProposalNewSaveFinalProposal$Params } from '../fn/final-proposal-new/final-proposal-new-save-final-proposal';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfQuotationSessionFinalProposalAltDto } from '../models/api-market-json-result-of-quotation-session-final-proposal';

@Injectable({ providedIn: 'root' })
export class FinalProposalNewApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `finalProposalNewGetFinalProposal()` */
  static readonly FinalProposalNewGetFinalProposalPath = '/market/api/v1/final-proposal-new/{tradeGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finalProposalNewGetFinalProposal()` instead.
   *
   * This method doesn't expect any request body.
   */
  finalProposalNewGetFinalProposal$Response(params: FinalProposalNewGetFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposalAltDto>> {
    return finalProposalNewGetFinalProposal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `finalProposalNewGetFinalProposal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  finalProposalNewGetFinalProposal(params: FinalProposalNewGetFinalProposal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfQuotationSessionFinalProposalAltDto> {
    return this.finalProposalNewGetFinalProposal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionFinalProposalAltDto>): ApiMarketJsonResultOfQuotationSessionFinalProposalAltDto => r.body)
    );
  }

  /** Path part for operation `finalProposalNewSaveFinalProposal()` */
  static readonly FinalProposalNewSaveFinalProposalPath = '/market/api/v1/final-proposal-new';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `finalProposalNewSaveFinalProposal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  finalProposalNewSaveFinalProposal$Response(params?: FinalProposalNewSaveFinalProposal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return finalProposalNewSaveFinalProposal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `finalProposalNewSaveFinalProposal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  finalProposalNewSaveFinalProposal(params?: FinalProposalNewSaveFinalProposal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.finalProposalNewSaveFinalProposal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

}
