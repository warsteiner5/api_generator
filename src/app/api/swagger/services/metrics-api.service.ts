/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfIEnumerableOfMetricDto } from '../models/api-market-json-result-of-i-enumerable-of-metric-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-metric-detail-dto';
import { metricsExportMetricDetailsToExcel } from '../fn/metrics/metrics-export-metric-details-to-excel';
import { MetricsExportMetricDetailsToExcel$Params } from '../fn/metrics/metrics-export-metric-details-to-excel';
import { metricsGetDetailMetrics } from '../fn/metrics/metrics-get-detail-metrics';
import { MetricsGetDetailMetrics$Params } from '../fn/metrics/metrics-get-detail-metrics';
import { metricsGetMetricValues } from '../fn/metrics/metrics-get-metric-values';
import { MetricsGetMetricValues$Params } from '../fn/metrics/metrics-get-metric-values';

@Injectable({ providedIn: 'root' })
export class MetricsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `metricsGetMetricValues()` */
  static readonly MetricsGetMetricValuesPath = '/market/api/v1/metrics/values';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricsGetMetricValues()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  metricsGetMetricValues$Response(params?: MetricsGetMetricValues$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfMetricDto>> {
    return metricsGetMetricValues(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricsGetMetricValues$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  metricsGetMetricValues(params?: MetricsGetMetricValues$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfMetricDto> {
    return this.metricsGetMetricValues$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfMetricDto>): ApiMarketJsonResultOfIEnumerableOfMetricDto => r.body)
    );
  }

  /** Path part for operation `metricsGetDetailMetrics()` */
  static readonly MetricsGetDetailMetricsPath = '/market/api/v1/metrics/details';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricsGetDetailMetrics()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  metricsGetDetailMetrics$Response(params?: MetricsGetDetailMetrics$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto>> {
    return metricsGetDetailMetrics(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricsGetDetailMetrics$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  metricsGetDetailMetrics(params?: MetricsGetDetailMetrics$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto> {
    return this.metricsGetDetailMetrics$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMetricDetailDto => r.body)
    );
  }

  /** Path part for operation `metricsExportMetricDetailsToExcel()` */
  static readonly MetricsExportMetricDetailsToExcelPath = '/market/api/v1/metrics/details/excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `metricsExportMetricDetailsToExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricsExportMetricDetailsToExcel$Response(params: MetricsExportMetricDetailsToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return metricsExportMetricDetailsToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `metricsExportMetricDetailsToExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  metricsExportMetricDetailsToExcel(params: MetricsExportMetricDetailsToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.metricsExportMetricDetailsToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
