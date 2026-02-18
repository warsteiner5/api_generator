import { AdditionalAgreementInitiatorEnum } from '../enums/additional-agreement-initiator.enum';

export interface AdditionalAgreementDocumentSignatureInfo {
  additionalAgreementId: number;
  fileGuid: string;
  participant: AdditionalAgreementInitiatorEnum;
}
