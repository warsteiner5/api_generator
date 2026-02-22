import { ApiSendDealToReworkRequestDto } from '../../../swagger/models/api-send-deal-to-rework-request-dto';
import { SendDealToReworkRequest } from '../../models/send-deal-to-rework-request.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const sendDealToReworkRequestAdapter = (source?: ApiSendDealToReworkRequestDto | null): SendDealToReworkRequest => {
  return {
    chatId: source?.ChatId,
    comment: source?.Comment,
    contractExecutionDate: source?.ContractExecutionDate,
    dealId: source?.DealId,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    fileIds: source?.FileIds,
  };
}
