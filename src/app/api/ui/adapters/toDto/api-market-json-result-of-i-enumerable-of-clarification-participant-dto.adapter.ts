import { MarketJsonResultOfIEnumerableOfClarificationParticipant } from '../../models/market-json-result-of-i-enumerable-of-clarification-participant.interface';
import { ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-clarification-participant-dto';

export function adaptApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto(source?: MarketJsonResultOfIEnumerableOfClarificationParticipant | null): ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto {
  return (source ?? {}) as ApiMarketJsonResultOfIEnumerableOfClarificationParticipantDto;
}
