import { TagParticipantOfferRuleTypeEnum } from '../../enums/tag-participant-offer-rule-type.enum';
import { ApiTagParticipantOfferRuleTypeEnum } from '../../../swagger/models/api-tag-participant-offer-rule-type-enum';

export const apiTagParticipantOfferRuleTypeEnumAdapter = (source?: TagParticipantOfferRuleTypeEnum | null): ApiTagParticipantOfferRuleTypeEnum => {
  switch (source) {
    case TagParticipantOfferRuleTypeEnum.ParticipantOffer:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantOffer;
    case TagParticipantOfferRuleTypeEnum.ParticipantOfferCategory:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferCategory;
    case TagParticipantOfferRuleTypeEnum.ParticipantOfferOkpd2:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferOkpd2;
    case TagParticipantOfferRuleTypeEnum.ParticipantOfferTenant:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferTenant;
    case TagParticipantOfferRuleTypeEnum.ParticipantId:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantId;
    case TagParticipantOfferRuleTypeEnum.ParticipantHomeRegion:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantHomeRegion;
    case TagParticipantOfferRuleTypeEnum.PriceList:
      return ApiTagParticipantOfferRuleTypeEnum.PriceList;
    case TagParticipantOfferRuleTypeEnum.HasUinTru:
      return ApiTagParticipantOfferRuleTypeEnum.HasUinTru;
    case TagParticipantOfferRuleTypeEnum.ParticipantOfferProductName:
      return ApiTagParticipantOfferRuleTypeEnum.ParticipantOfferProductName;
    default:
      throw new Error(`Enum value is not defined: TagParticipantOfferRuleTypeEnum=${String(source)}`);
  }
}
