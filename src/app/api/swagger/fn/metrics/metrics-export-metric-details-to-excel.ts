/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMetricTypeAltEnum } from '../../models/api-metric-type';

export interface MetricsExportMetricDetailsToExcel$Params {
  objectId: number;
  metricType: ApiMetricTypeAltEnum;
}

export function metricsExportMetricDetailsToExcel(http: HttpClient, rootUrl: string, params: MetricsExportMetricDetailsToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, metricsExportMetricDetailsToExcel.PATH, 'get');
  if (params) {
    rb.query('objectId', params.objectId, {});
    rb.query('metricType', params.metricType, {});
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

metricsExportMetricDetailsToExcel.PATH = '/bla-bla-vla/metrics/details/excel';
