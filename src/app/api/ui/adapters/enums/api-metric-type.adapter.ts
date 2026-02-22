import { MetricTypeAltEnum } from '../../enums/metric-type-alt.enum';
import { ApiMetricTypeAltEnum } from '../../../swagger/models/api-metric-type';

export const apiMetricTypeAltEnumAdapter = (source?: MetricTypeAltEnum | null): ApiMetricTypeAltEnum => {
  switch (source) {
    case MetricTypeAltEnum.Undefined:
      return ApiMetricTypeAltEnum.Undefined;
    case MetricTypeAltEnum.View:
      return ApiMetricTypeAltEnum.View;
    case MetricTypeAltEnum.Download:
      return ApiMetricTypeAltEnum.Download;
    default:
      throw new Error(`Enum value is not defined: MetricTypeAltEnum=${String(source)}`);
  }
}
