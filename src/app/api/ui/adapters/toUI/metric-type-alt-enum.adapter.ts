import { ApiMetricTypeAltEnum } from '../../../swagger/models/api-metric-type';
import { MetricTypeAltEnum } from '../../enums/metric-type-alt.enum';

export function adaptMetricTypeAltEnumToUI(source?: ApiMetricTypeAltEnum | null): MetricTypeAltEnum {
  switch (source) {
    case ApiMetricTypeAltEnum.Undefined:
      return MetricTypeAltEnum.Undefined;
    case ApiMetricTypeAltEnum.View:
      return MetricTypeAltEnum.View;
    case ApiMetricTypeAltEnum.Download:
      return MetricTypeAltEnum.Download;
    default:
      throw new Error(`Enum value is not defined: ApiMetricTypeAltEnum=${String(source)}`);
  }
}
