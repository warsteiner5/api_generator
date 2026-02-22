import { ApiDealSignerAltDto } from '../../../swagger/models/api-deal-signer';
import { DealSignerAlt } from '../../models/deal-signer-alt.interface';
import { marketTradePersonAltAdapter } from './market-trade-person-alt.adapter';

export const dealSignerAltAdapter = (source?: ApiDealSignerAltDto | null): DealSignerAlt => {
  return {
    canCustomerSignDeal: source?.CanCustomerSignDeal,
    canEditSigner: source?.CanEditSigner,
    showSigner: source?.ShowSigner,
    signerPerson: source?.SignerPerson === null ? undefined : marketTradePersonAltAdapter(source?.SignerPerson),
  };
}
