import { ParticipantOfferTypeEnum } from '../../enums/participant-offer-type.enum';
import { ApiParticipantOfferTypeEnum } from '../../../swagger/models/api-participant-offer-type-enum';

export const apiParticipantOfferTypeEnumAdapter = (source?: ParticipantOfferTypeEnum | null): ApiParticipantOfferTypeEnum => {
  switch (source) {
    case ParticipantOfferTypeEnum.PriceListOffer:
      return ApiParticipantOfferTypeEnum.PriceListOffer;
    case ParticipantOfferTypeEnum.CommercialOffer:
      return ApiParticipantOfferTypeEnum.CommercialOffer;
    default:
      throw new Error(`Enum value is not defined: ParticipantOfferTypeEnum=${String(source)}`);
  }
}
