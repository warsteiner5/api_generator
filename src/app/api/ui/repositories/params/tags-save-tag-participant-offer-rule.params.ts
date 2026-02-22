import { TagParticipantOfferRule } from '../../models/tag-participant-offer-rule.interface';
import { TagsSaveTagParticipantOfferRule$Params } from '../../../swagger/fn/tags/tags-save-tag-participant-offer-rule';
import { apiTagParticipantOfferRuleDtoAdapter } from '../../adapters/models/api-tag-participant-offer-rule-dto.adapter';

// @ts-ignore
export interface TagsSaveTagParticipantOfferRuleParams {
  body?: TagParticipantOfferRule;
}

export function tagsSaveTagParticipantOfferRuleAdapter(params?: TagsSaveTagParticipantOfferRuleParams): TagsSaveTagParticipantOfferRule$Params {
  if (!params) {
    return {} as TagsSaveTagParticipantOfferRule$Params;
  }
  return {
      body: apiTagParticipantOfferRuleDtoAdapter(params.body),
  };
}
