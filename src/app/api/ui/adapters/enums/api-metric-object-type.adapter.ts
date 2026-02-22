import { MetricObjectTypeAltEnum } from '../../enums/metric-object-type-alt.enum';
import { ApiMetricObjectTypeAltEnum } from '../../../swagger/models/api-metric-object-type';

export const apiMetricObjectTypeAltEnumAdapter = (source?: MetricObjectTypeAltEnum | null): ApiMetricObjectTypeAltEnum => {
  switch (source) {
    case MetricObjectTypeAltEnum.Undefined:
      return ApiMetricObjectTypeAltEnum.Undefined;
    case MetricObjectTypeAltEnum.Trade:
      return ApiMetricObjectTypeAltEnum.Trade;
    case MetricObjectTypeAltEnum.ParticipantOffer:
      return ApiMetricObjectTypeAltEnum.ParticipantOffer;
    default:
      throw new Error(`Enum value is not defined: MetricObjectTypeAltEnum=${String(source)}`);
  }
}
