import { MetricsExportMetricDetailsToExcel$Params } from '../../../swagger/fn/metrics/metrics-export-metric-details-to-excel';
import { MetricTypeAltEnum } from '../../enums/metric-type-alt.enum';
import { apiMetricTypeAltEnumAdapter } from '../../adapters/enums/api-metric-type.adapter';

// @ts-ignore
export interface MetricsExportMetricDetailsToExcelParams {
  objectId: number;
  metricType: MetricTypeAltEnum;
}

export function metricsExportMetricDetailsToExcelAdapter(params?: MetricsExportMetricDetailsToExcelParams): MetricsExportMetricDetailsToExcel$Params {
  if (!params) {
    return {} as MetricsExportMetricDetailsToExcel$Params;
  }
  return {
      objectId: params.objectId,
      metricType: apiMetricTypeAltEnumAdapter(params.metricType),
  };
}
