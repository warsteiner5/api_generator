import { DealSignerAlt } from '../../models/deal-signer-alt.interface';
import { ApiDealSignerAltDto } from '../../../swagger/models/api-deal-signer';
import { apiMarketTradePersonAltDtoAdapter } from './api-market-trade-person.adapter';

export const apiDealSignerAltDtoAdapter = (source?: DealSignerAlt | null): ApiDealSignerAltDto => {
  return {
    CanCustomerSignDeal: source?.canCustomerSignDeal,
    CanEditSigner: source?.canEditSigner,
    ShowSigner: source?.showSigner,
    SignerPerson: source?.signerPerson === null ? undefined : apiMarketTradePersonAltDtoAdapter(source?.signerPerson),
  };
}
