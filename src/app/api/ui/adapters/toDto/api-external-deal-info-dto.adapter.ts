import { ExternalDealInfo } from '../../models/external-deal-info.interface';
import { ApiExternalDealInfoDto } from '../../../swagger/models/api-external-deal-info-dto';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiExternalDealInfoDto(source?: ExternalDealInfo | null): ApiExternalDealInfoDto {
  return {
    ConclusionDate: source?.conclusionDate,
    CustomerOrganizationFullName: source?.customerOrganizationFullName,
    CustomerOrganizationPostalAddress: source?.customerOrganizationPostalAddress,
    CustomerOrganizationRegNumber: source?.customerOrganizationRegNumber,
    DealCustomNumber: source?.dealCustomNumber,
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    Id: source?.id,
    IsElectronicForm: source?.isElectronicForm,
    ParticipantOrganizationId: source?.participantOrganizationId,
    ParticipantOrganizationName: source?.participantOrganizationName,
    Price: source?.price,
    SignByCustomer: source?.signByCustomer,
    SignBySupplier: source?.signBySupplier,
    State: adaptApiDealStateEnum(source?.state),
    TradeName: source?.tradeName,
    TradeNotificationNumber: source?.tradeNotificationNumber,
  };
}
