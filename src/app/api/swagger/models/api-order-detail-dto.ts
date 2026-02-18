/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferSpecificFlagEnum } from '../models/api-participant-offer-specific-flag-enum';
import { ApiTruTypeEnum } from '../models/api-tru-type-enum';
import { ApiUsedClassificatorTypeEnum } from '../models/api-used-classificator-type-enum';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiOrderDetailDto {
  ClassificatorCode?: string | null;
  ClassificatorDescription?: string | null;
  Id?: number;
  KsrCode?: string | null;
  KsrUnitQuantity?: number | null;
  LotItemId?: number;
  OkeiCode?: string | null;
  OkeiDescription?: string | null;
  Okpd2Codes?: Array<string> | null;
  ParticipantOfferSpecific?: ApiParticipantOfferSpecificFlagEnum | null;
  PositionNumber?: string | null;
  ProductName?: string | null;
  Quantity?: number | null;
  Type?: ApiTruTypeEnum | null;
  UnitPrice?: number | null;
  UnitPriceRegion?: string | null;
  UsedClassificatorType?: ApiUsedClassificatorTypeEnum | null;
  UsedClassificatorTypeDescription?: string | null;
  VatRate?: number | null;
  VatRateDescription?: string | null;
  VatRateState?: ApiVatRateStateEnum;
}
