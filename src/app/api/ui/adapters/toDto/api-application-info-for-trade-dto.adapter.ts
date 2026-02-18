import { ApplicationInfoForTrade } from '../../models/application-info-for-trade.interface';
import { ApiApplicationInfoForTradeDto } from '../../../swagger/models/api-application-info-for-trade-dto';
import { adaptApiApplicationSourceEnum } from './api-application-source-enum.adapter';
import { adaptApiApplicationStateEnum } from './api-application-state-enum.adapter';
import { adaptApiManufactureTypeEnum } from './api-manufacture-type-enum.adapter';
import { adaptApiMeetsRequirementsEnum } from './api-meets-requirements-enum.adapter';
import { adaptApiOrganizationCountryAltEnum } from './api-organization-country.adapter';
import { adaptApiTradeViewDto } from './api-trade-view-dto.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiApplicationInfoForTradeDto(source?: ApplicationInfoForTrade | null): ApiApplicationInfoForTradeDto {
  return {
    AbleToSignDeal: source?.ableToSignDeal,
    ApplicationSource: adaptApiApplicationSourceEnum(source?.applicationSource),
    ApplicationState: adaptApiApplicationStateEnum(source?.applicationState),
    ApplicationStateDescription: source?.applicationStateDescription,
    HasSubmitterElectronicSignature: source?.hasSubmitterElectronicSignature,
    Host: source?.host,
    Id: source?.id,
    IncomplianceWithTheRequirementsReason: source?.incomplianceWithTheRequirementsReason,
    IsApplicationForCurrentParticipantOrganization: source?.isApplicationForCurrentParticipantOrganization,
    IsApplicationFromAnotherTenant: source?.isApplicationFromAnotherTenant,
    IsDealCreated: source?.isDealCreated,
    ManufactureType: adaptApiManufactureTypeEnum(source?.manufactureType),
    MeetsRequirements: adaptApiMeetsRequirementsEnum(source?.meetsRequirements),
    NeedEditOnMarket: source?.needEditOnMarket,
    ParticipantCanViewDeal: source?.participantCanViewDeal,
    Price: source?.price,
    PublicationDate: source?.publicationDate,
    RankNumber: source?.rankNumber,
    ResultPosition: source?.resultPosition,
    SubmitterGuid: source?.submitterGuid,
    SubmitterId: source?.submitterId,
    SubmitterLogoUrl: source?.submitterLogoUrl,
    SubmitterName: source?.submitterName,
    SubmitterOrganizationCountry: adaptApiOrganizationCountryAltEnum(source?.submitterOrganizationCountry),
    TenantSource: source?.tenantSource,
    Trade: adaptApiTradeViewDto(source?.trade),
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
