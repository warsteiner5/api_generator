import { TagParticipantOfferRuleListView } from '../../models/tag-participant-offer-rule-list-view.interface';
import { ApiTagParticipantOfferRuleListViewDto } from '../../../swagger/models/api-tag-participant-offer-rule-list-view-dto';
import { adaptApiTagParticipantOfferRuleTypeEnum } from './api-tag-participant-offer-rule-type-enum.adapter';

export function adaptApiTagParticipantOfferRuleListViewDto(source?: TagParticipantOfferRuleListView | null): ApiTagParticipantOfferRuleListViewDto {
  return {
    Id: source?.id,
    Name: source?.name,
    Status: source?.status,
    Type: adaptApiTagParticipantOfferRuleTypeEnum(source?.type),
  };
}
