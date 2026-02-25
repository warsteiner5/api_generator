import { TradesFilterObjectForParticipantAlt } from '../../models/trades-filter-object-for-participant-alt.interface';
import { ApiTradesFilterObjectForParticipantAltDto } from '../../../swagger/models/api-trades-filter-object-for-participant';
import { apiTradesFilterObjectAltDtoAdapter } from './api-trades-filter-object.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiTradesFilterObjectForParticipantAltDtoAdapter = (source?: TradesFilterObjectForParticipantAlt | null): ApiTradesFilterObjectForParticipantAltDto => {
  return {
    ...apiTradesFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiTradesFilterObjectAltDtoAdapter>[0]),
    OnlyTradesWithMyApplications: source?.onlyTradesWithMyApplications,
    ClassificatorCodes: source?.classificatorCodes,
    UsedClassificatorType: source?.usedClassificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificatorType),
    CustomerAddress: source?.customerAddress,
  };
}
