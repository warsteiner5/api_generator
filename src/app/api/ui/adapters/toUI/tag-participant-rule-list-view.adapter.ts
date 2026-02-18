import { ApiTagParticipantRuleListViewDto } from '../../../swagger/models/api-tag-participant-rule-list-view-dto';
import { TagParticipantRuleListView } from '../../models/tag-participant-rule-list-view.interface';
import { adaptTagParticipantOfferRuleTypeEnumToUI } from './tag-participant-offer-rule-type-enum.adapter';

export function adaptTagParticipantRuleListViewToUI(source?: ApiTagParticipantRuleListViewDto | null): TagParticipantRuleListView {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    objects: source?.Objects ?? [],
    status: source?.Status ?? false,
    type: adaptTagParticipantOfferRuleTypeEnumToUI(source?.Type),
  };
}
