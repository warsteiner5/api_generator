import { ApiParticipantOfferTypeEnum } from '../../../swagger/models/api-participant-offer-type-enum';
import { ParticipantOfferTypeEnum } from '../../enums/participant-offer-type.enum';

export const participantOfferTypeEnumAdapter = (source?: ApiParticipantOfferTypeEnum | null): ParticipantOfferTypeEnum => {
  switch (source) {
    case ApiParticipantOfferTypeEnum.PriceListOffer:
      return ParticipantOfferTypeEnum.PriceListOffer;
    case ApiParticipantOfferTypeEnum.CommercialOffer:
      return ParticipantOfferTypeEnum.CommercialOffer;
    default:
      throw new Error(`Enum value is not defined: ApiParticipantOfferTypeEnum=${String(source)}`);
  }
}
