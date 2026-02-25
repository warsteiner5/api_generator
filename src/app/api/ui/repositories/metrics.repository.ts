import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfMetricDetailAdapter } from '../adapters/models/market-pagination-result-of-list-of-metric-detail.adapter';
import { Metric } from '../models/metric.interface';
import { metricAdapter } from '../adapters/models/metric.adapter';
import { MetricDetail } from '../models/metric-detail.interface';
import { MetricsApiService } from '../../swagger/services/metrics-api.service';
import { MetricsExportMetricDetailsToExcelParams, metricsExportMetricDetailsToExcelAdapter } from './params/metrics-export-metric-details-to-excel.params';
import { MetricsGetDetailMetricsParams, metricsGetDetailMetricsAdapter } from './params/metrics-get-detail-metrics.params';
import { MetricsGetMetricValuesParams, metricsGetMetricValuesAdapter } from './params/metrics-get-metric-values.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetricsRepository {
  private readonly _api = inject(MetricsApiService);

  metricsExportMetricDetailsToExcel(params: MetricsExportMetricDetailsToExcelParams): Observable<Blob> {
    return this._api.metricsExportMetricDetailsToExcel(metricsExportMetricDetailsToExcelAdapter(params));
  }

  metricsGetDetailMetrics(params?: MetricsGetDetailMetricsParams): Observable<MarketPaginationResult<MetricDetail[]>> {
    return this._api.metricsGetDetailMetrics(metricsGetDetailMetricsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMetricDetailAdapter(res?.data))
    );
  }

  metricsGetMetricValues(params?: MetricsGetMetricValuesParams): Observable<Metric[]> {
    return this._api.metricsGetMetricValues(metricsGetMetricValuesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => metricAdapter(item)))
    );
  }

}
