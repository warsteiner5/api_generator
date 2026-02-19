/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto } from '../../models/api-market-json-result-of-quotation-session-import-details-response';
import { ApiQuotationSessionImportDetailsRequestAltDto } from '../../models/api-quotation-session-import-details-request';

export interface QuotationSessionImportDetails$Params {
      body?: ApiQuotationSessionImportDetailsRequestAltDto | null
}

export function quotationSessionImportDetails(http: HttpClient, rootUrl: string, params?: QuotationSessionImportDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionImportDetails.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionImportDetailsResponseAltDto>;
    })
  );
}

quotationSessionImportDetails.PATH = '/market/api/v1/quotation-session/import-details';
