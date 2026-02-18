import { TagParticipantOfferRule } from '../../models/tag-participant-offer-rule.interface';
import { TagsSaveTagParticipantOfferRule$Params } from '../../../swagger/fn/tags/tags-save-tag-participant-offer-rule';
import { adaptApiTagParticipantOfferRuleDto } from '../../adapters/toDto/api-tag-participant-offer-rule-dto.adapter';

export interface TagsSaveTagParticipantOfferRuleParams {
  body?: TagParticipantOfferRule;
}

export const tagsSaveTagParticipantOfferRuleParamsAdapter = {
  adapt(params?: TagsSaveTagParticipantOfferRuleParams): TagsSaveTagParticipantOfferRule$Params {
    if (!params) {
      return {} as TagsSaveTagParticipantOfferRule$Params;
    }
    return {
      body: adaptApiTagParticipantOfferRuleDto(params.body),
    };
  }
};
