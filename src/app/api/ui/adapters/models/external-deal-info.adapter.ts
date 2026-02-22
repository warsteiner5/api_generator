import { ApiExternalDealInfoDto } from '../../../swagger/models/api-external-deal-info-dto';
import { ExternalDealInfo } from '../../models/external-deal-info.interface';
import { dealDocumentAdapter } from './deal-document.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const externalDealInfoAdapter = (source?: ApiExternalDealInfoDto | null): ExternalDealInfo => {
  return {
    conclusionDate: source?.ConclusionDate,
    customerOrganizationFullName: source?.CustomerOrganizationFullName,
    customerOrganizationPostalAddress: source?.CustomerOrganizationPostalAddress,
    customerOrganizationRegNumber: source?.CustomerOrganizationRegNumber,
    dealCustomNumber: source?.DealCustomNumber,
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
    executionFrom: source?.ExecutionFrom,
    executionTo: source?.ExecutionTo,
    id: source?.Id,
    isElectronicForm: source?.IsElectronicForm,
    participantOrganizationId: source?.ParticipantOrganizationId,
    participantOrganizationName: source?.ParticipantOrganizationName,
    price: source?.Price,
    signByCustomer: source?.SignByCustomer,
    signBySupplier: source?.SignBySupplier,
    state: source?.State === null ? undefined : dealStateEnumAdapter(source?.State),
    tradeName: source?.TradeName,
    tradeNotificationNumber: source?.TradeNotificationNumber,
  };
}
