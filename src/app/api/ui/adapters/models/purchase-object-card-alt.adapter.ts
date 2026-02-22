import { ApiPurchaseObjectCardAltDto } from '../../../swagger/models/api-purchase-object-card';
import { PurchaseObjectCardAlt } from '../../models/purchase-object-card-alt.interface';
import { standartAltAdapter } from './standart-alt.adapter';

export const purchaseObjectCardAltAdapter = (source?: ApiPurchaseObjectCardAltDto | null): PurchaseObjectCardAlt => {
  return {
    additionalInfo: source?.AdditionalInfo,
    hasNotActualStandart: source?.HasNotActualStandart,
    id: source?.Id,
    isGrammarError: source?.IsGrammarError,
    isMatch: source?.IsMatch,
    lotId: source?.LotId,
    nationalCode: source?.NationalCode,
    notActualStandarts: source?.NotActualStandarts,
    okpdId: source?.OKPDId,
    percent: source?.Percent,
    price: source?.Price,
    profitPrice: source?.ProfitPrice,
    quantityValue: source?.QuantityValue,
    rawAdditionalInfo: source?.RawAdditionalInfo,
    rawQuantityValue: source?.RawQuantityValue,
    rawTRUName: source?.RawTRUName,
    searchQuery: source?.SearchQuery,
    serializedProfitModel: source?.SerializedProfitModel,
    standarts: source?.Standarts?.map((item) => standartAltAdapter(item)),
    sum: source?.Sum,
    truName: source?.TRUName,
  };
}
