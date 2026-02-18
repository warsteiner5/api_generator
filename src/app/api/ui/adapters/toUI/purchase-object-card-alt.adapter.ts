import { ApiPurchaseObjectCardAltDto } from '../../../swagger/models/api-purchase-object-card';
import { PurchaseObjectCardAlt } from '../../models/purchase-object-card-alt.interface';
import { adaptStandartAltToUI } from './standart-alt.adapter';

export function adaptPurchaseObjectCardAltToUI(source?: ApiPurchaseObjectCardAltDto | null): PurchaseObjectCardAlt {
  return {
    additionalInfo: source?.AdditionalInfo ?? '',
    hasNotActualStandart: source?.HasNotActualStandart ?? false,
    id: source?.Id ?? 0,
    isGrammarError: source?.IsGrammarError ?? false,
    isMatch: source?.IsMatch ?? false,
    lotId: source?.LotId ?? 0,
    nationalCode: source?.NationalCode ?? '',
    notActualStandarts: source?.NotActualStandarts ?? [],
    okpdId: source?.OKPDId ?? '',
    percent: source?.Percent ?? '',
    price: source?.Price ?? '',
    profitPrice: source?.ProfitPrice ?? 0,
    quantityValue: source?.QuantityValue ?? '',
    rawAdditionalInfo: source?.RawAdditionalInfo ?? '',
    rawQuantityValue: source?.RawQuantityValue ?? 0,
    rawTRUName: source?.RawTRUName ?? '',
    searchQuery: source?.SearchQuery ?? '',
    serializedProfitModel: source?.SerializedProfitModel ?? '',
    standarts: (source?.Standarts ?? []).map((item) => adaptStandartAltToUI(item)),
    sum: source?.Sum ?? '',
    truName: source?.TRUName ?? '',
  };
}
