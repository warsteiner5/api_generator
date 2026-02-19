/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOffersTableDto } from '../../models/api-market-json-result-of-offers-table-dto';
import { ApiOffersTableFilterAltDto } from '../../models/api-offers-table-filter';

export interface RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params {
      body?: ApiOffersTableFilterAltDto | null
}

export function requirementRequestsGetRequirementRequestCharacteristicTableByFilter(http: HttpClient, rootUrl: string, params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOffersTableDto>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsGetRequirementRequestCharacteristicTableByFilter.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOffersTableDto>;
    })
  );
}

requirementRequestsGetRequirementRequestCharacteristicTableByFilter.PATH = '/market/api/v1/RequirementRequests/getcharacteristictable';
