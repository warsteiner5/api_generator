import { ApiTagOperatorViewDto } from '../../../swagger/models/api-tag-operator-view-dto';
import { TagOperatorView } from '../../models/tag-operator-view.interface';
import { tagObjectEnumAdapter } from '../enums/tag-object-enum.adapter';
import { tagParticipantOfferRuleListViewAdapter } from './tag-participant-offer-rule-list-view.adapter';
import { tagParticipantRuleListViewAdapter } from './tag-participant-rule-list-view.adapter';

export const tagOperatorViewAdapter = (source?: ApiTagOperatorViewDto | null): TagOperatorView => {
  return {
    code: source?.Code,
    description: source?.Description,
    filterText: source?.FilterText,
    hideable: source?.Hideable,
    hintText: source?.HintText,
    id: source?.Id,
    imageGuid: source?.ImageGuid,
    isActive: source?.IsActive,
    isEnabledByDefault: source?.IsEnabledByDefault,
    isTenantsIncluded: source?.IsTenantsIncluded,
    name: source?.Name,
    tagObject: source?.TagObject === null ? undefined : tagObjectEnumAdapter(source?.TagObject),
    tagParticipantOfferRules: source?.TagParticipantOfferRules?.map((item) => tagParticipantOfferRuleListViewAdapter(item)),
    tagParticipantRules: source?.TagParticipantRules?.map((item) => tagParticipantRuleListViewAdapter(item)),
  };
}
