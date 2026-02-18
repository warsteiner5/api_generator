import { adaptMetricDetailToUI } from '../adapters/toUI/metric-detail.adapter';
import { adaptMetricToUI } from '../adapters/toUI/metric.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Metric } from '../models/metric.interface';
import { MetricDetail } from '../models/metric-detail.interface';
import { MetricsApiService } from '../../swagger/services/metrics-api.service';
import { MetricsExportMetricDetailsToExcelParams, metricsExportMetricDetailsToExcelParamsAdapter } from './params/metrics-export-metric-details-to-excel.params';
import { MetricsGetDetailMetricsParams, metricsGetDetailMetricsParamsAdapter } from './params/metrics-get-detail-metrics.params';
import { MetricsGetMetricValuesParams, metricsGetMetricValuesParamsAdapter } from './params/metrics-get-metric-values.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetricsRepository {
  private readonly _api = inject(MetricsApiService);

  metricsExportMetricDetailsToExcel(params: MetricsExportMetricDetailsToExcelParams): Observable<Blob> {
    return this._api.metricsExportMetricDetailsToExcel(metricsExportMetricDetailsToExcelParamsAdapter.adapt(params));
  }

  metricsGetDetailMetrics(params?: MetricsGetDetailMetricsParams): Observable<MetricDetail[]> {
    return this._api.metricsGetDetailMetrics(metricsGetDetailMetricsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMetricDetailToUI(item)))
    );
  }

  metricsGetMetricValues(params?: MetricsGetMetricValuesParams): Observable<Metric[]> {
    return this._api.metricsGetMetricValues(metricsGetMetricValuesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMetricToUI(item)))
    );
  }

}
