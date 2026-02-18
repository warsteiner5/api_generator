import { ApiApplicationInfoForTradeDto } from '../../../swagger/models/api-application-info-for-trade-dto';
import { ApplicationInfoForTrade } from '../../models/application-info-for-trade.interface';
import { adaptApplicationSourceEnumToUI } from './application-source-enum.adapter';
import { adaptApplicationStateEnumToUI } from './application-state-enum.adapter';
import { adaptManufactureTypeEnumToUI } from './manufacture-type-enum.adapter';
import { adaptMeetsRequirementsEnumToUI } from './meets-requirements-enum.adapter';
import { adaptOrganizationCountryAltEnumToUI } from './organization-country-alt-enum.adapter';
import { adaptTradeViewToUI } from './trade-view.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptApplicationInfoForTradeToUI(source?: ApiApplicationInfoForTradeDto | null): ApplicationInfoForTrade {
  return {
    ableToSignDeal: source?.AbleToSignDeal ?? false,
    applicationSource: adaptApplicationSourceEnumToUI(source?.ApplicationSource),
    applicationState: adaptApplicationStateEnumToUI(source?.ApplicationState),
    applicationStateDescription: source?.ApplicationStateDescription ?? '',
    hasSubmitterElectronicSignature: source?.HasSubmitterElectronicSignature ?? false,
    host: source?.Host ?? '',
    id: source?.Id ?? 0,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason ?? '',
    isApplicationForCurrentParticipantOrganization: source?.IsApplicationForCurrentParticipantOrganization ?? false,
    isApplicationFromAnotherTenant: source?.IsApplicationFromAnotherTenant ?? false,
    isDealCreated: source?.IsDealCreated ?? false,
    manufactureType: adaptManufactureTypeEnumToUI(source?.ManufactureType),
    meetsRequirements: adaptMeetsRequirementsEnumToUI(source?.MeetsRequirements),
    needEditOnMarket: source?.NeedEditOnMarket ?? false,
    participantCanViewDeal: source?.ParticipantCanViewDeal ?? false,
    price: source?.Price ?? 0,
    publicationDate: source?.PublicationDate ?? '',
    rankNumber: source?.RankNumber ?? 0,
    resultPosition: source?.ResultPosition ?? 0,
    submitterGuid: source?.SubmitterGuid ?? '',
    submitterId: source?.SubmitterId ?? '',
    submitterLogoUrl: source?.SubmitterLogoUrl ?? '',
    submitterName: source?.SubmitterName ?? '',
    submitterOrganizationCountry: adaptOrganizationCountryAltEnumToUI(source?.SubmitterOrganizationCountry),
    tenantSource: source?.TenantSource ?? 0,
    trade: adaptTradeViewToUI(source?.Trade),
    vatRate: source?.VatRate ?? 0,
    vatRateDescription: source?.VatRateDescription ?? '',
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
