import { ApiMetricObjectTypeAltEnum } from '../../../swagger/models/api-metric-object-type';
import { MetricObjectTypeAltEnum } from '../../enums/metric-object-type-alt.enum';

export function adaptMetricObjectTypeAltEnumToUI(source?: ApiMetricObjectTypeAltEnum | null): MetricObjectTypeAltEnum {
  switch (source) {
    case ApiMetricObjectTypeAltEnum.Undefined:
      return MetricObjectTypeAltEnum.Undefined;
    case ApiMetricObjectTypeAltEnum.Trade:
      return MetricObjectTypeAltEnum.Trade;
    case ApiMetricObjectTypeAltEnum.ParticipantOffer:
      return MetricObjectTypeAltEnum.ParticipantOffer;
    default:
      throw new Error(`Enum value is not defined: ApiMetricObjectTypeAltEnum=${String(source)}`);
  }
}
