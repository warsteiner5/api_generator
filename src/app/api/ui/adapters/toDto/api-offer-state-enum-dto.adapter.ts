import { OfferStateEnumDtoAltEnum } from '../../enums/offer-state-enum-dto-alt.enum';
import { ApiOfferStateEnumDtoAltEnum } from '../../../swagger/models/api-offer-state-enum-dto';

export function adaptApiOfferStateEnumDtoAltEnum(source?: OfferStateEnumDtoAltEnum | null): ApiOfferStateEnumDtoAltEnum {
  switch (source) {
    case OfferStateEnumDtoAltEnum.All:
      return ApiOfferStateEnumDtoAltEnum.All;
    case OfferStateEnumDtoAltEnum.Draft:
      return ApiOfferStateEnumDtoAltEnum.Draft;
    case OfferStateEnumDtoAltEnum.Active:
      return ApiOfferStateEnumDtoAltEnum.Active;
    case OfferStateEnumDtoAltEnum.NotActive:
      return ApiOfferStateEnumDtoAltEnum.NotActive;
    case OfferStateEnumDtoAltEnum.WaitingForApprove:
      return ApiOfferStateEnumDtoAltEnum.WaitingForApprove;
    case OfferStateEnumDtoAltEnum.Valid:
      return ApiOfferStateEnumDtoAltEnum.Valid;
    default:
      throw new Error(`Enum value is not defined: OfferStateEnumDtoAltEnum=${String(source)}`);
  }
}
