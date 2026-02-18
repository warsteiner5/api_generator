import { ApiSendDealToReworkRequestDto } from '../../../swagger/models/api-send-deal-to-rework-request-dto';
import { SendDealToReworkRequest } from '../../models/send-deal-to-rework-request.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptSendDealToReworkRequestToUI(source?: ApiSendDealToReworkRequestDto | null): SendDealToReworkRequest {
  return {
    chatId: source?.ChatId ?? 0,
    comment: source?.Comment ?? '',
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    dealId: source?.DealId ?? 0,
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    fileIds: source?.FileIds ?? [],
  };
}
