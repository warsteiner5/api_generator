/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfValidationResultAltDto } from '../../models/api-market-json-result-of-validation-result';

export interface EisDataValidateEisPlan$Params {
  planRegistrationNumber: string | null;
  planPositionNumber: string | null;
}

export function eisDataValidateEisPlan(http: HttpClient, rootUrl: string, params: EisDataValidateEisPlan$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfValidationResultAltDto>> {
  const rb = new RequestBuilder(rootUrl, eisDataValidateEisPlan.PATH, 'get');
  if (params) {
    rb.path('planRegistrationNumber', params.planRegistrationNumber, {});
    rb.path('planPositionNumber', params.planPositionNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfValidationResultAltDto>;
    })
  );
}

eisDataValidateEisPlan.PATH = '/market/api/v1/eis/data/plans/{planRegistrationNumber}/position/{planPositionNumber}/check';
