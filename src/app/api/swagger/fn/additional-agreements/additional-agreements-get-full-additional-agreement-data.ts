/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIListOfAdditionalAgreementDto } from '../../models/api-market-json-result-of-i-list-of-additional-agreement-dto';

export interface AdditionalAgreementsGetFullAdditionalAgreementData$Params {
  dealId: number;
}

export function additionalAgreementsGetFullAdditionalAgreementData(http: HttpClient, rootUrl: string, params: AdditionalAgreementsGetFullAdditionalAgreementData$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIListOfAdditionalAgreementDto>> {
  const rb = new RequestBuilder(rootUrl, additionalAgreementsGetFullAdditionalAgreementData.PATH, 'get');
  if (params) {
    rb.path('dealId', params.dealId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIListOfAdditionalAgreementDto>;
    })
  );
}

additionalAgreementsGetFullAdditionalAgreementData.PATH = '/market/api/v1/additionalAgreements/get-by-deal-id/{dealId}';
