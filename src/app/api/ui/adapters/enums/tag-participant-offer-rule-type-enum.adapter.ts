import { ApiTagParticipantOfferRuleTypeEnum } from '../../../swagger/models/api-tag-participant-offer-rule-type-enum';
import { TagParticipantOfferRuleTypeEnum } from '../../enums/tag-participant-offer-rule-type.enum';

export const tagParticipantOfferRuleTypeEnumAdapter = (source?: ApiTagParticipantOfferRuleTypeEnum | null): TagParticipantOfferRuleTypeEnum => {
  switch (source) {
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantOffer:
      return TagParticipantOfferRuleTypeEnum.ParticipantOffer;
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferCategory:
      return TagParticipantOfferRuleTypeEnum.ParticipantOfferCategory;
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferOkpd2:
      return TagParticipantOfferRuleTypeEnum.ParticipantOfferOkpd2;
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferTenant:
      return TagParticipantOfferRuleTypeEnum.ParticipantOfferTenant;
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantId:
      return TagParticipantOfferRuleTypeEnum.ParticipantId;
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantHomeRegion:
      return TagParticipantOfferRuleTypeEnum.ParticipantHomeRegion;
    case ApiTagParticipantOfferRuleTypeEnum.PriceList:
      return TagParticipantOfferRuleTypeEnum.PriceList;
    case ApiTagParticipantOfferRuleTypeEnum.HasUinTru:
      return TagParticipantOfferRuleTypeEnum.HasUinTru;
    case ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferProductName:
      return TagParticipantOfferRuleTypeEnum.ParticipantOfferProductName;
    default:
      throw new Error(`Enum value is not defined: ApiTagParticipantOfferRuleTypeEnum=${String(source)}`);
  }
}
