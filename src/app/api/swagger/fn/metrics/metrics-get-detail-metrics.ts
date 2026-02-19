/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-metric-detail-dto';
import { ApiMetricDetailsRequestAltDto } from '../../models/api-metric-details-request';

export interface MetricsGetDetailMetrics$Params {
      body?: ApiMetricDetailsRequestAltDto | null
}

export function metricsGetDetailMetrics(http: HttpClient, rootUrl: string, params?: MetricsGetDetailMetrics$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto>> {
  const rb = new RequestBuilder(rootUrl, metricsGetDetailMetrics.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto>;
    })
  );
}

metricsGetDetailMetrics.PATH = '/market/api/v1/metrics/details';
