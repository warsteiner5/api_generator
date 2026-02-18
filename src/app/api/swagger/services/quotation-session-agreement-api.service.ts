/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfFileInfoForSignDto } from '../models/api-market-json-result-of-file-info-for-sign-dto';
import { quotationSessionAgreementGetDataForSign } from '../fn/quotation-session-agreement/quotation-session-agreement-get-data-for-sign';
import { QuotationSessionAgreementGetDataForSign$Params } from '../fn/quotation-session-agreement/quotation-session-agreement-get-data-for-sign';

@Injectable({ providedIn: 'root' })
export class QuotationSessionAgreementApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `quotationSessionAgreementGetDataForSign()` */
  static readonly QuotationSessionAgreementGetDataForSignPath = '/bla-bla-vla/quotation-session/agreement/sign/data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `quotationSessionAgreementGetDataForSign()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionAgreementGetDataForSign$Response(params: QuotationSessionAgreementGetDataForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>> {
    return quotationSessionAgreementGetDataForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `quotationSessionAgreementGetDataForSign$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  quotationSessionAgreementGetDataForSign(params: QuotationSessionAgreementGetDataForSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFileInfoForSignDto> {
    return this.quotationSessionAgreementGetDataForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>): ApiMarketJsonResultOfFileInfoForSignDto => r.body)
    );
  }

}
