import { OfferStates } from '../../models/offer-states.interface';
import { ApiOfferStatesDto } from '../../../swagger/models/api-offer-states-dto';
import { adaptApiOfferStateEnumDtoAltEnum } from './api-offer-state-enum-dto.adapter';

export function adaptApiOfferStatesDto(source?: OfferStates | null): ApiOfferStatesDto {
  return {
    Count: source?.count,
    State: adaptApiOfferStateEnumDtoAltEnum(source?.state),
  };
}
