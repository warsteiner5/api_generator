import { DealObjectEnum } from '../enums/deal-object.enum';

export interface SignatureForDeal {
  dealObject: DealObjectEnum;
  executionTo: string;
  powerOfAttorneyId: string;
  budgetid: number;
  dealId: number;
  signatureForDealFilesObject: { [key: string]: string; };
  signatureForDealObject: string;
  signdata: string;
}
