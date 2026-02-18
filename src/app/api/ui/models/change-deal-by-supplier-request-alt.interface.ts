import { DealObjectEnum } from '../enums/deal-object.enum';

export interface ChangeDealBySupplierRequestAlt {
  chatId: number;
  dealId: number;
  dealObject: DealObjectEnum;
  documentGuids: string[];
  powerOfAttorneyId: string;
  signatureForDealFilesObject: { [key: string]: string; };
  signatureForDealObject: string;
  signdata: string;
}
