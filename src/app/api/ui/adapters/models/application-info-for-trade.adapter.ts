import { ApiApplicationInfoForTradeDto } from '../../../swagger/models/api-application-info-for-trade-dto';
import { ApplicationInfoForTrade } from '../../models/application-info-for-trade.interface';
import { applicationSourceEnumAdapter } from '../enums/application-source-enum.adapter';
import { applicationStateEnumAdapter } from '../enums/application-state-enum.adapter';
import { manufactureTypeEnumAdapter } from '../enums/manufacture-type-enum.adapter';
import { meetsRequirementsEnumAdapter } from '../enums/meets-requirements-enum.adapter';
import { organizationCountryAltEnumAdapter } from '../enums/organization-country-alt-enum.adapter';
import { tradeViewAdapter } from './trade-view.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const applicationInfoForTradeAdapter = (source?: ApiApplicationInfoForTradeDto | null): ApplicationInfoForTrade => {
  return {
    ableToSignDeal: source?.AbleToSignDeal,
    applicationSource: source?.ApplicationSource === null ? undefined : applicationSourceEnumAdapter(source?.ApplicationSource),
    applicationState: source?.ApplicationState === null ? undefined : applicationStateEnumAdapter(source?.ApplicationState),
    applicationStateDescription: source?.ApplicationStateDescription,
    hasSubmitterElectronicSignature: source?.HasSubmitterElectronicSignature,
    host: source?.Host,
    id: source?.Id,
    incomplianceWithTheRequirementsReason: source?.IncomplianceWithTheRequirementsReason,
    isApplicationForCurrentParticipantOrganization: source?.IsApplicationForCurrentParticipantOrganization,
    isApplicationFromAnotherTenant: source?.IsApplicationFromAnotherTenant,
    isDealCreated: source?.IsDealCreated,
    manufactureType: source?.ManufactureType === null ? undefined : manufactureTypeEnumAdapter(source?.ManufactureType),
    meetsRequirements: source?.MeetsRequirements === null ? undefined : meetsRequirementsEnumAdapter(source?.MeetsRequirements),
    needEditOnMarket: source?.NeedEditOnMarket,
    participantCanViewDeal: source?.ParticipantCanViewDeal,
    price: source?.Price,
    publicationDate: source?.PublicationDate,
    rankNumber: source?.RankNumber,
    resultPosition: source?.ResultPosition,
    submitterGuid: source?.SubmitterGuid,
    submitterId: source?.SubmitterId,
    submitterLogoUrl: source?.SubmitterLogoUrl,
    submitterName: source?.SubmitterName,
    submitterOrganizationCountry: source?.SubmitterOrganizationCountry === null ? undefined : organizationCountryAltEnumAdapter(source?.SubmitterOrganizationCountry),
    tenantSource: source?.TenantSource,
    trade: source?.Trade === null ? undefined : tradeViewAdapter(source?.Trade),
    vatRate: source?.VatRate,
    vatRateDescription: source?.VatRateDescription,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
