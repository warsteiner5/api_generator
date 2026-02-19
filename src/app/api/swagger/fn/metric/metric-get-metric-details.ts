/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MetricGetMetricDetails$Params {
  objectId: number | null;
  metricTypeId: number | null;
  pageSize: number | null;
  page: number | null;
}

export function metricGetMetricDetails(http: HttpClient, rootUrl: string, params: MetricGetMetricDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, metricGetMetricDetails.PATH, 'get');
  if (params) {
    rb.query('objectId', params.objectId, {});
    rb.query('metricTypeId', params.metricTypeId, {});
    rb.query('pageSize', params.pageSize, {});
    rb.query('page', params.page, {});
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

metricGetMetricDetails.PATH = '/api/Metric/GetMetricDetails';
