import { ApiDealSignerAltDto } from '../../../swagger/models/api-deal-signer';
import { DealSignerAlt } from '../../models/deal-signer-alt.interface';
import { adaptMarketTradePersonAltToUI } from './market-trade-person-alt.adapter';

export function adaptDealSignerAltToUI(source?: ApiDealSignerAltDto | null): DealSignerAlt {
  return {
    canCustomerSignDeal: source?.CanCustomerSignDeal ?? false,
    canEditSigner: source?.CanEditSigner ?? false,
    showSigner: source?.ShowSigner ?? false,
    signerPerson: adaptMarketTradePersonAltToUI(source?.SignerPerson),
  };
}
