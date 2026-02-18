import { DealSignerAlt } from '../../models/deal-signer-alt.interface';
import { ApiDealSignerAltDto } from '../../../swagger/models/api-deal-signer';
import { adaptApiMarketTradePersonAltDto } from './api-market-trade-person.adapter';

export function adaptApiDealSignerAltDto(source?: DealSignerAlt | null): ApiDealSignerAltDto {
  return {
    CanCustomerSignDeal: source?.canCustomerSignDeal,
    CanEditSigner: source?.canEditSigner,
    ShowSigner: source?.showSigner,
    SignerPerson: adaptApiMarketTradePersonAltDto(source?.signerPerson),
  };
}
