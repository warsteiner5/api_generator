import { ApiTagParticipantOfferRuleDto } from '../../../swagger/models/api-tag-participant-offer-rule-dto';
import { TagParticipantOfferRule } from '../../models/tag-participant-offer-rule.interface';
import { tagParticipantOfferRuleTypeEnumAdapter } from '../enums/tag-participant-offer-rule-type-enum.adapter';

export const tagParticipantOfferRuleAdapter = (source?: ApiTagParticipantOfferRuleDto | null): TagParticipantOfferRule => {
  return {
    categoryIds: source?.CategoryIds,
    id: source?.Id,
    isIncluded: source?.IsIncluded,
    name: source?.Name,
    okpd2Codes: source?.Okpd2Codes,
    participantHomeKladrRegionCodes: source?.ParticipantHomeKladrRegionCodes,
    participantIds: source?.ParticipantIds,
    participantOfferIds: source?.ParticipantOfferIds,
    status: source?.Status,
    tagId: source?.TagId,
    tenantIds: source?.TenantIds,
    type: source?.Type === null ? undefined : tagParticipantOfferRuleTypeEnumAdapter(source?.Type),
  };
}
