/* tslint:disable */
/* eslint-disable */
import { ApiMinPromTorgCharacteristicDto } from '../models/api-min-prom-torg-characteristic-dto';
import { ApiOfferCreatedMethodEnum } from '../models/api-offer-created-method-enum';
import { ApiProductStatusAltEnum } from '../models/api-product-status';
export interface ApiExternalIntegrationParticipantOfferDto {
  AdditionalPhotos?: Array<string> | null;
  CategoryId?: string | null;
  Characteristics?: Array<ApiMinPromTorgCharacteristicDto> | null;
  Cost?: string | null;
  Country?: string | null;
  DeliveryRegions?: Array<string> | null;
  Description?: string | null;
  Documents?: Array<string> | null;
  Gost?: string | null;
  Id?: number;
  IntegrationSource?: ApiOfferCreatedMethodEnum;
  IsCommodityProducer?: boolean;
  Manufacturer?: string | null;
  ManufacturerRegion?: string | null;
  MeasureUnit?: string | null;
  MeasureUnitId?: string | null;
  Name?: string | null;
  NtdCode?: string | null;
  Okpd2Code?: string | null;
  PhotoUrl?: string | null;
  Quantity?: number | null;
  Status?: ApiProductStatusAltEnum;
  VatInclude?: boolean;
  VatPercent?: number;
}
