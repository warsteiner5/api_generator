/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { metricAddDownloadMetric } from '../fn/metric/metric-add-download-metric';
import { MetricAddDownloadMetric$Params } from '../fn/metric/metric-add-download-metric';
import { metricGetMetricDetails } from '../fn/metric/metric-get-metric-details';
import { MetricGetMetricDetails$Params } from '../fn/metric/metric-get-metric-details';
import { metricGetMetricValues } from '../fn/metric/metric-get-metric-values';
import { MetricGetMetricValues$Params } from '../fn/metric/metric-get-metric-values';

@Injectable({ providedIn: 'root' })
export class MetricApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `metricGetMetricValues()` */
  static readonly MetricGetMetricValuesPath = '/api/Metric/GetMetricValues';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricGetMetricValues()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  metricGetMetricValues$Response(params?: MetricGetMetricValues$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return metricGetMetricValues(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricGetMetricValues$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  metricGetMetricValues(params?: MetricGetMetricValues$Params, context?: HttpContext): Observable<Blob> {
    return this.metricGetMetricValues$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `metricGetMetricDetails()` */
  static readonly MetricGetMetricDetailsPath = '/api/Metric/GetMetricDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricGetMetricDetails()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricGetMetricDetails$Response(params: MetricGetMetricDetails$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return metricGetMetricDetails(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricGetMetricDetails$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricGetMetricDetails(params: MetricGetMetricDetails$Params, context?: HttpContext): Observable<Blob> {
    return this.metricGetMetricDetails$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `metricAddDownloadMetric()` */
  static readonly MetricAddDownloadMetricPath = '/api/Metric/AddDownloadMetric';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricAddDownloadMetric()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricAddDownloadMetric$Response(params: MetricAddDownloadMetric$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return metricAddDownloadMetric(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricAddDownloadMetric$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricAddDownloadMetric(params: MetricAddDownloadMetric$Params, context?: HttpContext): Observable<Blob> {
    return this.metricAddDownloadMetric$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
