/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfTradePlan223PositionDto } from '../../models/api-market-json-result-of-trade-plan-223-position-dto';

export interface EisDataGetPlanPositionDetails$Params {
  planRegistrationNumber: string | null;
  positionNumber: number;
}

export function eisDataGetPlanPositionDetails(http: HttpClient, rootUrl: string, params: EisDataGetPlanPositionDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePlan223PositionDto>> {
  const rb = new RequestBuilder(rootUrl, eisDataGetPlanPositionDetails.PATH, 'get');
  if (params) {
    rb.path('planRegistrationNumber', params.planRegistrationNumber, {});
    rb.path('positionNumber', params.positionNumber, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfTradePlan223PositionDto>;
    })
  );
}

eisDataGetPlanPositionDetails.PATH = '/market/api/v1/eis/data/plans/{planRegistrationNumber}/positions/{positionNumber}/details';
