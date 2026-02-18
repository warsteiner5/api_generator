import { DifferenceDealProtocolAlt } from '../../models/difference-deal-protocol-alt.interface';
import { ApiDifferenceDealProtocolAltDto } from '../../../swagger/models/api-difference-deal-protocol';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiDifferenceDealProtocolAltDto(source?: DifferenceDealProtocolAlt | null): ApiDifferenceDealProtocolAltDto {
  return {
    ChatId: source?.chatId,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    DocumentGuids: source?.documentGuids ?? [],
    Id: source?.id,
    Reason: source?.reason,
  };
}
