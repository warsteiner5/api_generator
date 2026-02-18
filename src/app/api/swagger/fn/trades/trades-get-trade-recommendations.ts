/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-recommendation-dto';
import { ApiTradeRecommendationFilterDto } from '../../models/api-trade-recommendation-filter-dto';

export interface TradesGetTradeRecommendations$Params {
      body?: ApiTradeRecommendationFilterDto | null
}

export function tradesGetTradeRecommendations(http: HttpClient, rootUrl: string, params?: TradesGetTradeRecommendations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto>> {
  const rb = new RequestBuilder(rootUrl, tradesGetTradeRecommendations.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto>;
    })
  );
}

tradesGetTradeRecommendations.PATH = '/bla-bla-vla/trades/recommendations';
