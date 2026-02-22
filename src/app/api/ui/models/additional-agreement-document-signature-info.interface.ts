import { AdditionalAgreementInitiatorEnum } from '../enums/additional-agreement-initiator.enum';

// @ts-ignore
export interface AdditionalAgreementDocumentSignatureInfo {
  additionalAgreementId: number;
  fileGuid: string;
  participant: AdditionalAgreementInitiatorEnum;
}
