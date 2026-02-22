import { ApiOfferStateEnumDto } from '../../../swagger/models/api-offer-state-enum-dto';
import { OfferStateEnum } from '../../enums/offer-state.enum';

export const offerStateEnumAdapter = (source?: ApiOfferStateEnumDto | null): OfferStateEnum => {
  switch (source) {
    case ApiOfferStateEnumDto.All:
      return OfferStateEnum.All;
    case ApiOfferStateEnumDto.Draft:
      return OfferStateEnum.Draft;
    case ApiOfferStateEnumDto.Active:
      return OfferStateEnum.Active;
    case ApiOfferStateEnumDto.NotActive:
      return OfferStateEnum.NotActive;
    case ApiOfferStateEnumDto.WaitingForApprove:
      return OfferStateEnum.WaitingForApprove;
    case ApiOfferStateEnumDto.Valid:
      return OfferStateEnum.Valid;
    default:
      throw new Error(`Enum value is not defined: ApiOfferStateEnumDto=${String(source)}`);
  }
}
