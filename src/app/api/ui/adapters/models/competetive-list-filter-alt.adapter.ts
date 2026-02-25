import { ApiCompetetiveListFilterAltDto } from '../../../swagger/models/api-competetive-list-filter';
import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';
import { competitiveListItemStateEnumAdapter } from '../enums/competitive-list-item-state-enum.adapter';

export const competetiveListFilterAltAdapter = (source?: ApiCompetetiveListFilterAltDto | null): CompetetiveListFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    tradeId: source?.TradeId,
    deliveryKladrRegionCode: source?.DeliveryKladrRegionCode,
    state: source?.State === null ? undefined : competitiveListItemStateEnumAdapter(source?.State),
  };
}
