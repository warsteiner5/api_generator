import { TagParticipantRuleListView } from '../../models/tag-participant-rule-list-view.interface';
import { ApiTagParticipantRuleListViewDto } from '../../../swagger/models/api-tag-participant-rule-list-view-dto';
import { apiTagParticipantOfferRuleTypeEnumAdapter } from '../enums/api-tag-participant-offer-rule-type-enum.adapter';

export const apiTagParticipantRuleListViewDtoAdapter = (source?: TagParticipantRuleListView | null): ApiTagParticipantRuleListViewDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Objects: source?.objects,
    Status: source?.status,
    Type: source?.type === null ? undefined : apiTagParticipantOfferRuleTypeEnumAdapter(source?.type),
  };
}
