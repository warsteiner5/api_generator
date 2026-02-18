import { DifferenceDealProtocolAlt } from './difference-deal-protocol-alt.interface';

export interface RejectCustomerDealOnDemandOfProviderRequest {
  differenceDealProtocol: DifferenceDealProtocolAlt;
  organizationId: number;
}
