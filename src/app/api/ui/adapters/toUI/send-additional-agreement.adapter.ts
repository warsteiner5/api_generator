import { ApiSendAdditionalAgreementDto } from '../../../swagger/models/api-send-additional-agreement-dto';
import { SendAdditionalAgreement } from '../../models/send-additional-agreement.interface';
import { adaptSignatureForAdditionalAgreementToUI } from './signature-for-additional-agreement.adapter';

export function adaptSendAdditionalAgreementToUI(source?: ApiSendAdditionalAgreementDto | null): SendAdditionalAgreement {
  return {
    dealId: source?.DealId ?? 0,
    id: source?.Id ?? 0,
    signature: adaptSignatureForAdditionalAgreementToUI(source?.Signature),
    tradeId: source?.TradeId ?? 0,
  };
}
