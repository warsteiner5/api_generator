import { ApiExternalDealInfoDto } from '../../../swagger/models/api-external-deal-info-dto';
import { ExternalDealInfo } from '../../models/external-deal-info.interface';
import { adaptDealDocumentToUI } from './deal-document.adapter';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptExternalDealInfoToUI(source?: ApiExternalDealInfoDto | null): ExternalDealInfo {
  return {
    conclusionDate: source?.ConclusionDate ?? '',
    customerOrganizationFullName: source?.CustomerOrganizationFullName ?? '',
    customerOrganizationPostalAddress: source?.CustomerOrganizationPostalAddress ?? '',
    customerOrganizationRegNumber: source?.CustomerOrganizationRegNumber ?? '',
    dealCustomNumber: source?.DealCustomNumber ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
    executionFrom: source?.ExecutionFrom ?? '',
    executionTo: source?.ExecutionTo ?? '',
    id: source?.Id ?? 0,
    isElectronicForm: source?.IsElectronicForm ?? false,
    participantOrganizationId: source?.ParticipantOrganizationId ?? '',
    participantOrganizationName: source?.ParticipantOrganizationName ?? '',
    price: source?.Price ?? 0,
    signByCustomer: source?.SignByCustomer ?? '',
    signBySupplier: source?.SignBySupplier ?? '',
    state: adaptDealStateEnumToUI(source?.State),
    tradeName: source?.TradeName ?? '',
    tradeNotificationNumber: source?.TradeNotificationNumber ?? '',
  };
}
