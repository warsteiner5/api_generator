import { ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-clarification-participant-dto';
import { MarketJsonResultOfIEnumerableOfClarificationParticipant } from '../../models/market-json-result-of-i-enumerable-of-clarification-participant.interface';

export function adaptMarketJsonResultOfIEnumerableOfClarificationParticipantToUI(source?: ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto | null): MarketJsonResultOfIEnumerableOfClarificationParticipant {
  return (source ?? {}) as MarketJsonResultOfIEnumerableOfClarificationParticipant;
}
