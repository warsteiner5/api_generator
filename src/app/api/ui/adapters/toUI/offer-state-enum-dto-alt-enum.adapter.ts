import { ApiOfferStateEnumDtoAltEnum } from '../../../swagger/models/api-offer-state-enum-dto';
import { OfferStateEnumDtoAltEnum } from '../../enums/offer-state-enum-dto-alt.enum';

export function adaptOfferStateEnumDtoAltEnumToUI(source?: ApiOfferStateEnumDtoAltEnum | null): OfferStateEnumDtoAltEnum {
  switch (source) {
    case ApiOfferStateEnumDtoAltEnum.All:
      return OfferStateEnumDtoAltEnum.All;
    case ApiOfferStateEnumDtoAltEnum.Draft:
      return OfferStateEnumDtoAltEnum.Draft;
    case ApiOfferStateEnumDtoAltEnum.Active:
      return OfferStateEnumDtoAltEnum.Active;
    case ApiOfferStateEnumDtoAltEnum.NotActive:
      return OfferStateEnumDtoAltEnum.NotActive;
    case ApiOfferStateEnumDtoAltEnum.WaitingForApprove:
      return OfferStateEnumDtoAltEnum.WaitingForApprove;
    case ApiOfferStateEnumDtoAltEnum.Valid:
      return OfferStateEnumDtoAltEnum.Valid;
    default:
      throw new Error(`Enum value is not defined: ApiOfferStateEnumDtoAltEnum=${String(source)}`);
  }
}
