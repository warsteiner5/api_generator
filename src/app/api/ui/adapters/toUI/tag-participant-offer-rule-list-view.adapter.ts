import { ApiTagParticipantOfferRuleListViewDto } from '../../../swagger/models/api-tag-participant-offer-rule-list-view-dto';
import { TagParticipantOfferRuleListView } from '../../models/tag-participant-offer-rule-list-view.interface';
import { adaptTagParticipantOfferRuleTypeEnumToUI } from './tag-participant-offer-rule-type-enum.adapter';

export function adaptTagParticipantOfferRuleListViewToUI(source?: ApiTagParticipantOfferRuleListViewDto | null): TagParticipantOfferRuleListView {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    status: source?.Status ?? false,
    type: adaptTagParticipantOfferRuleTypeEnumToUI(source?.Type),
  };
}
