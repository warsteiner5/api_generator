import { TagParticipantOfferRuleListView } from '../../models/tag-participant-offer-rule-list-view.interface';
import { ApiTagParticipantOfferRuleListViewDto } from '../../../swagger/models/api-tag-participant-offer-rule-list-view-dto';
import { apiTagParticipantOfferRuleTypeEnumAdapter } from '../enums/api-tag-participant-offer-rule-type-enum.adapter';

export const apiTagParticipantOfferRuleListViewDtoAdapter = (source?: TagParticipantOfferRuleListView | null): ApiTagParticipantOfferRuleListViewDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Status: source?.status,
    Type: source?.type === null ? undefined : apiTagParticipantOfferRuleTypeEnumAdapter(source?.type),
  };
}
