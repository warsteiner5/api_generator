import { ApiOfferStatesDto } from '../../../swagger/models/api-offer-states-dto';
import { OfferStates } from '../../models/offer-states.interface';
import { offerStateEnumAdapter } from '../enums/offer-state-enum.adapter';

export const offerStatesAdapter = (source?: ApiOfferStatesDto | null): OfferStates => {
  return {
    count: source?.Count,
    state: source?.State === null ? undefined : offerStateEnumAdapter(source?.State),
  };
}
