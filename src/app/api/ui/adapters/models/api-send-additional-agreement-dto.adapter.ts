import { SendAdditionalAgreement } from '../../models/send-additional-agreement.interface';
import { ApiSendAdditionalAgreementDto } from '../../../swagger/models/api-send-additional-agreement-dto';
import { apiSignatureForAdditionalAgreementDtoAdapter } from './api-signature-for-additional-agreement-dto.adapter';

export const apiSendAdditionalAgreementDtoAdapter = (source?: SendAdditionalAgreement | null): ApiSendAdditionalAgreementDto => {
  return {
    DealId: source?.dealId,
    Id: source?.id,
    Signature: source?.signature === null ? undefined : apiSignatureForAdditionalAgreementDtoAdapter(source?.signature),
    TradeId: source?.tradeId,
  };
}
