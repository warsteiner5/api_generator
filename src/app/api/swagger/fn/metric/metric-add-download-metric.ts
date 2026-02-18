/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface MetricAddDownloadMetric$Params {
  tradeId: number;
}

export function metricAddDownloadMetric(http: HttpClient, rootUrl: string, params: MetricAddDownloadMetric$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, metricAddDownloadMetric.PATH, 'get');
  if (params) {
    rb.query('tradeId', params.tradeId, {});
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

metricAddDownloadMetric.PATH = '/bla-bla-vla/Metric/AddDownloadMetric';
