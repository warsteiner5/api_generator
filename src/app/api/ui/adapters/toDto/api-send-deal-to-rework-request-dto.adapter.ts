import { SendDealToReworkRequest } from '../../models/send-deal-to-rework-request.interface';
import { ApiSendDealToReworkRequestDto } from '../../../swagger/models/api-send-deal-to-rework-request-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiSendDealToReworkRequestDto(source?: SendDealToReworkRequest | null): ApiSendDealToReworkRequestDto {
  return {
    ChatId: source?.chatId,
    Comment: source?.comment,
    ContractExecutionDate: source?.contractExecutionDate,
    DealId: source?.dealId,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    FileIds: source?.fileIds ?? [],
  };
}
