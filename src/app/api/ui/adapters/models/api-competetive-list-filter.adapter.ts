import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';
import { ApiCompetetiveListFilterAltDto } from '../../../swagger/models/api-competetive-list-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';
import { apiCompetitiveListItemStateEnumAdapter } from '../enums/api-competitive-list-item-state-enum.adapter';

export const apiCompetetiveListFilterAltDtoAdapter = (source?: CompetetiveListFilterAlt | null): ApiCompetetiveListFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    TradeId: source?.tradeId,
    DeliveryKladrRegionCode: source?.deliveryKladrRegionCode,
    State: source?.state === null ? undefined : apiCompetitiveListItemStateEnumAdapter(source?.state),
  };
}
