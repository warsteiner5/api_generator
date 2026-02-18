import { PurchaseObjectCardAlt } from '../../models/purchase-object-card-alt.interface';
import { ApiPurchaseObjectCardAltDto } from '../../../swagger/models/api-purchase-object-card';
import { adaptApiStandartAltDto } from './api-standart.adapter';

export function adaptApiPurchaseObjectCardAltDto(source?: PurchaseObjectCardAlt | null): ApiPurchaseObjectCardAltDto {
  return {
    AdditionalInfo: source?.additionalInfo,
    HasNotActualStandart: source?.hasNotActualStandart,
    Id: source?.id,
    IsGrammarError: source?.isGrammarError,
    IsMatch: source?.isMatch,
    LotId: source?.lotId,
    NationalCode: source?.nationalCode,
    NotActualStandarts: source?.notActualStandarts ?? [],
    OKPDId: source?.okpdId,
    Percent: source?.percent,
    Price: source?.price,
    ProfitPrice: source?.profitPrice,
    QuantityValue: source?.quantityValue,
    RawAdditionalInfo: source?.rawAdditionalInfo,
    RawQuantityValue: source?.rawQuantityValue,
    RawTRUName: source?.rawTRUName,
    SearchQuery: source?.searchQuery,
    SerializedProfitModel: source?.serializedProfitModel,
    Standarts: (source?.standarts ?? []).map((item) => adaptApiStandartAltDto(item)),
    Sum: source?.sum,
    TRUName: source?.truName,
  };
}
