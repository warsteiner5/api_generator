import { ApiTagParticipantOfferRuleListViewDto } from '../../../swagger/models/api-tag-participant-offer-rule-list-view-dto';
import { TagParticipantOfferRuleListView } from '../../models/tag-participant-offer-rule-list-view.interface';
import { tagParticipantOfferRuleTypeEnumAdapter } from '../enums/tag-participant-offer-rule-type-enum.adapter';

export const tagParticipantOfferRuleListViewAdapter = (source?: ApiTagParticipantOfferRuleListViewDto | null): TagParticipantOfferRuleListView => {
  return {
    id: source?.Id,
    name: source?.Name,
    status: source?.Status,
    type: source?.Type === null ? undefined : tagParticipantOfferRuleTypeEnumAdapter(source?.Type),
  };
}
