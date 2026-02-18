export interface SignatureForAdditionalAgreement {
  powerOfAttorneyId: string;
  powerOfAttorneyRequired: boolean;
  signData: string;
  signatureForAdditionalAgreementFilesObject: { [key: string]: string; };
  signatureForAdditionalAgreementObject: string;
}
