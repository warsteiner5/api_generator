/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto } from '../../models/api-market-json-result-of-quotation-session-application-details-dto';

export interface QuotationSessionGetApplicationDetails$Params {
  id: number;
  applicationId: number;
}

export function quotationSessionGetApplicationDetails(http: HttpClient, rootUrl: string, params: QuotationSessionGetApplicationDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionGetApplicationDetails.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('applicationId', params.applicationId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfQuotationSessionApplicationDetailsDto>;
    })
  );
}

quotationSessionGetApplicationDetails.PATH = '/market/api/v1/quotation-session/{id}/applications/{applicationId}/details';
