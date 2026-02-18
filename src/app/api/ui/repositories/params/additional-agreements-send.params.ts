import { AdditionalAgreementsSend$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-send';
import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';
import { adaptApiSignatureForAdditionalAgreementDto } from '../../adapters/toDto/api-signature-for-additional-agreement-dto.adapter';

export interface AdditionalAgreementsSendParams {
  id: number;
  body?: SignatureForAdditionalAgreement;
}

export const additionalAgreementsSendParamsAdapter = {
  adapt(params?: AdditionalAgreementsSendParams): AdditionalAgreementsSend$Params {
    if (!params) {
      return {} as AdditionalAgreementsSend$Params;
    }
    return {
      id: params.id,
      body: adaptApiSignatureForAdditionalAgreementDto(params.body),
    };
  }
};
