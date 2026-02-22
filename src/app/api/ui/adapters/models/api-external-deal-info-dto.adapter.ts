import { ExternalDealInfo } from '../../models/external-deal-info.interface';
import { ApiExternalDealInfoDto } from '../../../swagger/models/api-external-deal-info-dto';
import { apiDealDocumentDtoAdapter } from './api-deal-document-dto.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiExternalDealInfoDtoAdapter = (source?: ExternalDealInfo | null): ApiExternalDealInfoDto => {
  return {
    ConclusionDate: source?.conclusionDate,
    CustomerOrganizationFullName: source?.customerOrganizationFullName,
    CustomerOrganizationPostalAddress: source?.customerOrganizationPostalAddress,
    CustomerOrganizationRegNumber: source?.customerOrganizationRegNumber,
    DealCustomNumber: source?.dealCustomNumber,
    Documents: source?.documents?.map((item) => apiDealDocumentDtoAdapter(item)),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    Id: source?.id,
    IsElectronicForm: source?.isElectronicForm,
    ParticipantOrganizationId: source?.participantOrganizationId,
    ParticipantOrganizationName: source?.participantOrganizationName,
    Price: source?.price,
    SignByCustomer: source?.signByCustomer,
    SignBySupplier: source?.signBySupplier,
    State: source?.state === null ? undefined : apiDealStateEnumAdapter(source?.state),
    TradeName: source?.tradeName,
    TradeNotificationNumber: source?.tradeNotificationNumber,
  };
}
