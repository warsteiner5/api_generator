/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfIEnumerableOfMetricDto } from '../../models/api-market-json-result-of-i-enumerable-of-metric-dto';
import { ApiMetricValuesRequestAltDto } from '../../models/api-metric-values-request';

export interface MetricsGetMetricValues$Params {
      body?: ApiMetricValuesRequestAltDto | null
}

export function metricsGetMetricValues(http: HttpClient, rootUrl: string, params?: MetricsGetMetricValues$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfMetricDto>> {
  const rb = new RequestBuilder(rootUrl, metricsGetMetricValues.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfMetricDto>;
    })
  );
}

metricsGetMetricValues.PATH = '/market/api/v1/metrics/values';
