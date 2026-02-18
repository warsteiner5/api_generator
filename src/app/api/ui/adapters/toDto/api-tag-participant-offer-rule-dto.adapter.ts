import { TagParticipantOfferRule } from '../../models/tag-participant-offer-rule.interface';
import { ApiTagParticipantOfferRuleDto } from '../../../swagger/models/api-tag-participant-offer-rule-dto';
import { adaptApiTagParticipantOfferRuleTypeEnum } from './api-tag-participant-offer-rule-type-enum.adapter';

export function adaptApiTagParticipantOfferRuleDto(source?: TagParticipantOfferRule | null): ApiTagParticipantOfferRuleDto {
  return {
    CategoryIds: source?.categoryIds ?? [],
    Id: source?.id,
    IsIncluded: source?.isIncluded,
    Name: source?.name,
    Okpd2Codes: source?.okpd2Codes ?? [],
    ParticipantHomeKladrRegionCodes: source?.participantHomeKladrRegionCodes ?? [],
    ParticipantIds: source?.participantIds ?? [],
    ParticipantOfferIds: source?.participantOfferIds ?? [],
    Status: source?.status,
    TagId: source?.tagId,
    TenantIds: source?.tenantIds ?? [],
    Type: adaptApiTagParticipantOfferRuleTypeEnum(source?.type),
  };
}
