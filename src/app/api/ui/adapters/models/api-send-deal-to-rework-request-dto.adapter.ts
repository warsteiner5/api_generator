import { SendDealToReworkRequest } from '../../models/send-deal-to-rework-request.interface';
import { ApiSendDealToReworkRequestDto } from '../../../swagger/models/api-send-deal-to-rework-request-dto';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiSendDealToReworkRequestDtoAdapter = (source?: SendDealToReworkRequest | null): ApiSendDealToReworkRequestDto => {
  return {
    ChatId: source?.chatId,
    Comment: source?.comment,
    ContractExecutionDate: source?.contractExecutionDate,
    DealId: source?.dealId,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    FileIds: source?.fileIds,
  };
}
