import { OfferStateEnum } from '../../enums/offer-state.enum';
import { ApiOfferStateEnumDto } from '../../../swagger/models/api-offer-state-enum-dto';

export function adaptApiOfferStateEnumDto(source?: OfferStateEnum | null): ApiOfferStateEnumDto {
  switch (source) {
    case OfferStateEnum.All:
      return ApiOfferStateEnumDto.All;
    case OfferStateEnum.Draft:
      return ApiOfferStateEnumDto.Draft;
    case OfferStateEnum.Active:
      return ApiOfferStateEnumDto.Active;
    case OfferStateEnum.NotActive:
      return ApiOfferStateEnumDto.NotActive;
    case OfferStateEnum.WaitingForApprove:
      return ApiOfferStateEnumDto.WaitingForApprove;
    case OfferStateEnum.Valid:
      return ApiOfferStateEnumDto.Valid;
    default:
      throw new Error(`Enum value is not defined: OfferStateEnum=${String(source)}`);
  }
}
