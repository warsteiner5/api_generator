import { ApiTagParticipantOfferRuleDto } from '../../../swagger/models/api-tag-participant-offer-rule-dto';
import { TagParticipantOfferRule } from '../../models/tag-participant-offer-rule.interface';
import { adaptTagParticipantOfferRuleTypeEnumToUI } from './tag-participant-offer-rule-type-enum.adapter';

export function adaptTagParticipantOfferRuleToUI(source?: ApiTagParticipantOfferRuleDto | null): TagParticipantOfferRule {
  return {
    categoryIds: source?.CategoryIds ?? [],
    id: source?.Id ?? 0,
    isIncluded: source?.IsIncluded ?? false,
    name: source?.Name ?? '',
    okpd2Codes: source?.Okpd2Codes ?? [],
    participantHomeKladrRegionCodes: source?.ParticipantHomeKladrRegionCodes ?? [],
    participantIds: source?.ParticipantIds ?? [],
    participantOfferIds: source?.ParticipantOfferIds ?? [],
    status: source?.Status ?? false,
    tagId: source?.TagId ?? 0,
    tenantIds: source?.TenantIds ?? [],
    type: adaptTagParticipantOfferRuleTypeEnumToUI(source?.Type),
  };
}
