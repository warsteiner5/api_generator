import { TagOperatorView } from '../../models/tag-operator-view.interface';
import { ApiTagOperatorViewDto } from '../../../swagger/models/api-tag-operator-view-dto';
import { apiTagObjectEnumAdapter } from '../enums/api-tag-object-enum.adapter';
import { apiTagParticipantOfferRuleListViewDtoAdapter } from './api-tag-participant-offer-rule-list-view-dto.adapter';
import { apiTagParticipantRuleListViewDtoAdapter } from './api-tag-participant-rule-list-view-dto.adapter';

export const apiTagOperatorViewDtoAdapter = (source?: TagOperatorView | null): ApiTagOperatorViewDto => {
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
    TagObject: source?.tagObject === null ? undefined : apiTagObjectEnumAdapter(source?.tagObject),
    TagParticipantOfferRules: source?.tagParticipantOfferRules?.map((item) => apiTagParticipantOfferRuleListViewDtoAdapter(item)),
    TagParticipantRules: source?.tagParticipantRules?.map((item) => apiTagParticipantRuleListViewDtoAdapter(item)),
  };
}
