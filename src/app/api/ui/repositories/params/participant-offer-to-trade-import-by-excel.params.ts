import { ParticipantOfferToTradeImportByExcel$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-import-by-excel';

// @ts-ignore
export interface ParticipantOfferToTradeImportByExcelParams {
  tradeId: number;
  importFileGuid: string;
}

export function participantOfferToTradeImportByExcelAdapter(params?: ParticipantOfferToTradeImportByExcelParams): ParticipantOfferToTradeImportByExcel$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeImportByExcel$Params;
  }
  return {
      tradeId: params.tradeId,
      importFileGuid: params.importFileGuid,
  };
}
