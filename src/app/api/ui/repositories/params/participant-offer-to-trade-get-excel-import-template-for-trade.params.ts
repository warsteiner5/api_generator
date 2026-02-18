import { ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-excel-import-template-for-trade';

export interface ParticipantOfferToTradeGetExcelImportTemplateForTradeParams {
  tradeId: number;
}

export const participantOfferToTradeGetExcelImportTemplateForTradeParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetExcelImportTemplateForTradeParams): ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetExcelImportTemplateForTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
