import { ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-trade-lot-specifications-import-by-excel-template';

// @ts-ignore
export interface ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParams {
  tradeId: number;
}

export function participantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateAdapter(params?: ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplateParams): ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetTradeLotSpecificationsImportByExcelTemplate$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
