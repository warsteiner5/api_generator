import { AdditionalAgreementGetAdditionalAgreementSignature$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-additional-agreement-signature';
import { AdditionalAgreementInitiatorEnum } from '../../enums/additional-agreement-initiator.enum';
import { adaptApiAdditionalAgreementInitiatorEnum } from '../../adapters/toDto/api-additional-agreement-initiator-enum.adapter';

export interface AdditionalAgreementGetAdditionalAgreementSignatureParams {
  additionalAgreementId: number;
  fileGuid: string;
  participant: AdditionalAgreementInitiatorEnum;
}

export const additionalAgreementGetAdditionalAgreementSignatureParamsAdapter = {
  adapt(params?: AdditionalAgreementGetAdditionalAgreementSignatureParams): AdditionalAgreementGetAdditionalAgreementSignature$Params {
    if (!params) {
      return {} as AdditionalAgreementGetAdditionalAgreementSignature$Params;
    }
    return {
      additionalAgreementId: params.additionalAgreementId,
      fileGuid: params.fileGuid,
      participant: adaptApiAdditionalAgreementInitiatorEnum(params.participant),
    };
  }
};
