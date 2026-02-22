import { AdditionalAgreementGetAdditionalAgreementSignature$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-additional-agreement-signature';
import { AdditionalAgreementInitiatorEnum } from '../../enums/additional-agreement-initiator.enum';
import { apiAdditionalAgreementInitiatorEnumAdapter } from '../../adapters/enums/api-additional-agreement-initiator-enum.adapter';

// @ts-ignore
export interface AdditionalAgreementGetAdditionalAgreementSignatureParams {
  additionalAgreementId: number;
  fileGuid: string;
  participant: AdditionalAgreementInitiatorEnum;
}

export function additionalAgreementGetAdditionalAgreementSignatureAdapter(params?: AdditionalAgreementGetAdditionalAgreementSignatureParams): AdditionalAgreementGetAdditionalAgreementSignature$Params {
  if (!params) {
    return {} as AdditionalAgreementGetAdditionalAgreementSignature$Params;
  }
  return {
      additionalAgreementId: params.additionalAgreementId,
      fileGuid: params.fileGuid,
      participant: apiAdditionalAgreementInitiatorEnumAdapter(params.participant),
  };
}
