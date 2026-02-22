import { OfferStates } from '../../models/offer-states.interface';
import { ApiOfferStatesDto } from '../../../swagger/models/api-offer-states-dto';
import { apiOfferStateEnumDtoAdapter } from '../enums/api-offer-state-enum-dto.adapter';

export const apiOfferStatesDtoAdapter = (source?: OfferStates | null): ApiOfferStatesDto => {
  return {
    Count: source?.count,
    State: source?.state === null ? undefined : apiOfferStateEnumDtoAdapter(source?.state),
  };
}
