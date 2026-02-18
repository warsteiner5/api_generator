import { SendAdditionalAgreement } from '../../models/send-additional-agreement.interface';
import { ApiSendAdditionalAgreementDto } from '../../../swagger/models/api-send-additional-agreement-dto';
import { adaptApiSignatureForAdditionalAgreementDto } from './api-signature-for-additional-agreement-dto.adapter';

export function adaptApiSendAdditionalAgreementDto(source?: SendAdditionalAgreement | null): ApiSendAdditionalAgreementDto {
  return {
    DealId: source?.dealId,
    Id: source?.id,
    Signature: adaptApiSignatureForAdditionalAgreementDto(source?.signature),
    TradeId: source?.tradeId,
  };
}
