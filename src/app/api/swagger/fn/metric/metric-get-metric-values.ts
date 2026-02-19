/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMetricValuesRequestAltDto } from '../../models/api-metric-values-request';

export interface MetricGetMetricValues$Params {
      body?: ApiMetricValuesRequestAltDto | null
}

export function metricGetMetricValues(http: HttpClient, rootUrl: string, params?: MetricGetMetricValues$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, metricGetMetricValues.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

metricGetMetricValues.PATH = '/api/Metric/GetMetricValues';
