import { MetricsExportMetricDetailsToExcel$Params } from '../../../swagger/fn/metrics/metrics-export-metric-details-to-excel';
import { MetricTypeAltEnum } from '../../enums/metric-type-alt.enum';
import { adaptApiMetricTypeAltEnum } from '../../adapters/toDto/api-metric-type.adapter';

export interface MetricsExportMetricDetailsToExcelParams {
  objectId: number;
  metricType: MetricTypeAltEnum;
}

export const metricsExportMetricDetailsToExcelParamsAdapter = {
  adapt(params?: MetricsExportMetricDetailsToExcelParams): MetricsExportMetricDetailsToExcel$Params {
    if (!params) {
      return {} as MetricsExportMetricDetailsToExcel$Params;
    }
    return {
      objectId: params.objectId,
      metricType: adaptApiMetricTypeAltEnum(params.metricType),
    };
  }
};
