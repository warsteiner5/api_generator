import { ApiTagOperatorViewDto } from '../../../swagger/models/api-tag-operator-view-dto';
import { TagOperatorView } from '../../models/tag-operator-view.interface';
import { adaptTagObjectEnumToUI } from './tag-object-enum.adapter';
import { adaptTagParticipantOfferRuleListViewToUI } from './tag-participant-offer-rule-list-view.adapter';
import { adaptTagParticipantRuleListViewToUI } from './tag-participant-rule-list-view.adapter';

export function adaptTagOperatorViewToUI(source?: ApiTagOperatorViewDto | null): TagOperatorView {
  return {
    code: source?.Code ?? '',
    description: source?.Description ?? '',
    filterText: source?.FilterText ?? '',
    hideable: source?.Hideable ?? false,
    hintText: source?.HintText ?? '',
    id: source?.Id ?? 0,
    imageGuid: source?.ImageGuid ?? '',
    isActive: source?.IsActive ?? false,
    isEnabledByDefault: source?.IsEnabledByDefault ?? false,
    isTenantsIncluded: source?.IsTenantsIncluded ?? false,
    name: source?.Name ?? '',
    tagObject: adaptTagObjectEnumToUI(source?.TagObject),
    tagParticipantOfferRules: (source?.TagParticipantOfferRules ?? []).map((item) => adaptTagParticipantOfferRuleListViewToUI(item)),
    tagParticipantRules: (source?.TagParticipantRules ?? []).map((item) => adaptTagParticipantRuleListViewToUI(item)),
  };
}
