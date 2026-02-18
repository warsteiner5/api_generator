import { MyTermsAlt } from './my-terms-alt.interface';
import { NationalModeRequirementTypeEnum } from '../enums/national-mode-requirement-type.enum';

export interface SingleSupplierTradeProductAlt {
  id: number;
  name: string;
  nationalModeRequirementType: NationalModeRequirementTypeEnum;
  offerId: number;
  offerTerms: MyTermsAlt;
  pictureGuid: string;
  positionNumber: number;
  price: number;
  quantity: number;
  shortOkeiName: string;
  sum: number;
  sumWithVat: number;
}
