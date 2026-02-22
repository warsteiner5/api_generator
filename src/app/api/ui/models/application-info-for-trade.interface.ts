import { ApplicationSourceEnum } from '../enums/application-source.enum';
import { ApplicationStateEnum } from '../enums/application-state.enum';
import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';
import { MeetsRequirementsEnum } from '../enums/meets-requirements.enum';
import { OrganizationCountryAltEnum } from '../enums/organization-country-alt.enum';
import { TradeView } from './trade-view.interface';
import { VatRateStateEnum } from '../enums/vat-rate-state.enum';

// @ts-ignore
export interface ApplicationInfoForTrade {
  ableToSignDeal: boolean;
  applicationSource: ApplicationSourceEnum;
  applicationState: ApplicationStateEnum;
  applicationStateDescription: string;
  hasSubmitterElectronicSignature: boolean;
  host: string;
  id: number;
  incomplianceWithTheRequirementsReason: string;
  isApplicationForCurrentParticipantOrganization: boolean;
  isApplicationFromAnotherTenant: boolean;
  isDealCreated: boolean;
  manufactureType: ManufactureTypeEnum;
  meetsRequirements: MeetsRequirementsEnum;
  needEditOnMarket: boolean;
  participantCanViewDeal: boolean;
  price: number;
  publicationDate: string;
  rankNumber: number;
  resultPosition: number;
  submitterGuid: string;
  submitterId: string;
  submitterLogoUrl: string;
  submitterName: string;
  submitterOrganizationCountry: OrganizationCountryAltEnum;
  tenantSource: number;
  trade: TradeView;
  vatRate: number;
  vatRateDescription: string;
  vatRateState: VatRateStateEnum;
}
