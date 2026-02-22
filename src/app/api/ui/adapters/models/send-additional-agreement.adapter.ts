import { ApiSendAdditionalAgreementDto } from '../../../swagger/models/api-send-additional-agreement-dto';
import { SendAdditionalAgreement } from '../../models/send-additional-agreement.interface';
import { signatureForAdditionalAgreementAdapter } from './signature-for-additional-agreement.adapter';

export const sendAdditionalAgreementAdapter = (source?: ApiSendAdditionalAgreementDto | null): SendAdditionalAgreement => {
  return {
    dealId: source?.DealId,
    id: source?.Id,
    signature: source?.Signature === null ? undefined : signatureForAdditionalAgreementAdapter(source?.Signature),
    tradeId: source?.TradeId,
  };
}
