import { ApiTagParticipantRuleListViewDto } from '../../../swagger/models/api-tag-participant-rule-list-view-dto';
import { TagParticipantRuleListView } from '../../models/tag-participant-rule-list-view.interface';
import { tagParticipantOfferRuleTypeEnumAdapter } from '../enums/tag-participant-offer-rule-type-enum.adapter';

export const tagParticipantRuleListViewAdapter = (source?: ApiTagParticipantRuleListViewDto | null): TagParticipantRuleListView => {
  return {
    id: source?.Id,
    name: source?.Name,
    objects: source?.Objects,
    status: source?.Status,
    type: source?.Type === null ? undefined : tagParticipantOfferRuleTypeEnumAdapter(source?.Type),
  };
}
