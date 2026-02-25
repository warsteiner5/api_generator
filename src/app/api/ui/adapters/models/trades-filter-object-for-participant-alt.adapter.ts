import { ApiTradesFilterObjectForParticipantAltDto } from '../../../swagger/models/api-trades-filter-object-for-participant';
import { TradesFilterObjectForParticipantAlt } from '../../models/trades-filter-object-for-participant-alt.interface';
import { tradesFilterObjectAltAdapter } from './trades-filter-object-alt.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const tradesFilterObjectForParticipantAltAdapter = (source?: ApiTradesFilterObjectForParticipantAltDto | null): TradesFilterObjectForParticipantAlt => {
  return {
    ...tradesFilterObjectAltAdapter(source as unknown as Parameters<typeof tradesFilterObjectAltAdapter>[0]),
    onlyTradesWithMyApplications: source?.OnlyTradesWithMyApplications,
    classificatorCodes: source?.ClassificatorCodes,
    usedClassificatorType: source?.UsedClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificatorType),
    customerAddress: source?.CustomerAddress,
  };
}
