/* tslint:disable */
/* eslint-disable */
import { ApiApplicationSourceEnum } from '../models/api-application-source-enum';
import { ApiApplicationStateEnum } from '../models/api-application-state-enum';
import { ApiManufactureTypeEnum } from '../models/api-manufacture-type-enum';
import { ApiMeetsRequirementsEnum } from '../models/api-meets-requirements-enum';
import { ApiOrganizationCountryAltEnum } from '../models/api-organization-country';
import { ApiTradeViewDto } from '../models/api-trade-view-dto';
import { ApiVatRateStateEnum } from '../models/api-vat-rate-state-enum';
export interface ApiApplicationInfoForTradeDto {
  AbleToSignDeal?: boolean;
  ApplicationSource?: ApiApplicationSourceEnum | null;
  ApplicationState?: ApiApplicationStateEnum;
  ApplicationStateDescription?: string | null;
  HasSubmitterElectronicSignature?: boolean;
  Host?: string | null;
  Id?: number;
  IncomplianceWithTheRequirementsReason?: string | null;
  IsApplicationForCurrentParticipantOrganization?: boolean;
  IsApplicationFromAnotherTenant?: boolean;
  IsDealCreated?: boolean;
  ManufactureType?: ApiManufactureTypeEnum;
  MeetsRequirements?: ApiMeetsRequirementsEnum;
  NeedEditOnMarket?: boolean;
  ParticipantCanViewDeal?: boolean;
  Price?: number | null;
  PublicationDate?: string | null;
  RankNumber?: number;
  ResultPosition?: number | null;
  SubmitterGuid?: string;
  SubmitterId?: string | null;
  SubmitterLogoUrl?: string | null;
  SubmitterName?: string | null;
  SubmitterOrganizationCountry?: ApiOrganizationCountryAltEnum;
  TenantSource?: number | null;
  Trade?: ApiTradeViewDto | null;
  VatRate?: number | null;
  VatRateDescription?: string | null;
  VatRateState?: ApiVatRateStateEnum;
}
