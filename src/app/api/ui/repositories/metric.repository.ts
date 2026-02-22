import { Injectable, inject } from '@angular/core';
import { MetricAddDownloadMetricParams, metricAddDownloadMetricAdapter } from './params/metric-add-download-metric.params';
import { MetricApiService } from '../../swagger/services/metric-api.service';
import { MetricGetMetricDetailsParams, metricGetMetricDetailsAdapter } from './params/metric-get-metric-details.params';
import { MetricGetMetricValuesParams, metricGetMetricValuesAdapter } from './params/metric-get-metric-values.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MetricRepository {
  private readonly _api = inject(MetricApiService);

  metricAddDownloadMetric(params: MetricAddDownloadMetricParams): Observable<Blob> {
    return this._api.metricAddDownloadMetric(metricAddDownloadMetricAdapter(params));
  }

  metricGetMetricDetails(params: MetricGetMetricDetailsParams): Observable<Blob> {
    return this._api.metricGetMetricDetails(metricGetMetricDetailsAdapter(params));
  }

  metricGetMetricValues(params?: MetricGetMetricValuesParams): Observable<Blob> {
    return this._api.metricGetMetricValues(metricGetMetricValuesAdapter(params));
  }

}
