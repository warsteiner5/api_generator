/* tslint:disable */
/* eslint-disable */
import { ApiMyTermsAltDto } from '../models/api-my-terms';
import { ApiNationalModeRequirementTypeEnum } from '../models/api-national-mode-requirement-type-enum';
export interface ApiSingleSupplierTradeProductAltDto {
  Id?: number;
  Name?: string | null;
  NationalModeRequirementType?: ApiNationalModeRequirementTypeEnum | null;
  OfferId?: number | null;
  OfferTerms?: ApiMyTermsAltDto | null;
  PictureGuid?: string;
  PositionNumber?: number;
  Price?: number | null;
  Quantity?: number | null;
  ShortOkeiName?: string | null;
  Sum?: number | null;
  SumWithVat?: number | null;
}
