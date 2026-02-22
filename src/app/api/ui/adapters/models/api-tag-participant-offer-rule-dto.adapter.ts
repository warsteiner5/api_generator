import { TagParticipantOfferRule } from '../../models/tag-participant-offer-rule.interface';
import { ApiTagParticipantOfferRuleDto } from '../../../swagger/models/api-tag-participant-offer-rule-dto';
import { apiTagParticipantOfferRuleTypeEnumAdapter } from '../enums/api-tag-participant-offer-rule-type-enum.adapter';

export const apiTagParticipantOfferRuleDtoAdapter = (source?: TagParticipantOfferRule | null): ApiTagParticipantOfferRuleDto => {
  return {
    CategoryIds: source?.categoryIds,
    Id: source?.id,
    IsIncluded: source?.isIncluded,
    Name: source?.name,
    Okpd2Codes: source?.okpd2Codes,
    ParticipantHomeKladrRegionCodes: source?.participantHomeKladrRegionCodes,
    ParticipantIds: source?.participantIds,
    ParticipantOfferIds: source?.participantOfferIds,
    Status: source?.status,
    TagId: source?.tagId,
    TenantIds: source?.tenantIds,
    Type: source?.type === null ? undefined : apiTagParticipantOfferRuleTypeEnumAdapter(source?.type),
  };
}
