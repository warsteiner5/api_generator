import { TagOperatorView } from '../../models/tag-operator-view.interface';
import { ApiTagOperatorViewDto } from '../../../swagger/models/api-tag-operator-view-dto';
import { adaptApiTagObjectEnum } from './api-tag-object-enum.adapter';
import { adaptApiTagParticipantOfferRuleListViewDto } from './api-tag-participant-offer-rule-list-view-dto.adapter';
import { adaptApiTagParticipantRuleListViewDto } from './api-tag-participant-rule-list-view-dto.adapter';

export function adaptApiTagOperatorViewDto(source?: TagOperatorView | null): ApiTagOperatorViewDto {
  return {
    Code: source?.code,
    Description: source?.description,
    FilterText: source?.filterText,
    Hideable: source?.hideable,
    HintText: source?.hintText,
    Id: source?.id,
    ImageGuid: source?.imageGuid,
    IsActive: source?.isActive,
    IsEnabledByDefault: source?.isEnabledByDefault,
    IsTenantsIncluded: source?.isTenantsIncluded,
    Name: source?.name,
    TagObject: adaptApiTagObjectEnum(source?.tagObject),
    TagParticipantOfferRules: (source?.tagParticipantOfferRules ?? []).map((item) => adaptApiTagParticipantOfferRuleListViewDto(item)),
    TagParticipantRules: (source?.tagParticipantRules ?? []).map((item) => adaptApiTagParticipantRuleListViewDto(item)),
  };
}
