import { ParticipantOfferToTradeImportByExcel$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-import-by-excel';

export interface ParticipantOfferToTradeImportByExcelParams {
  tradeId: number;
  importFileGuid: string;
}

export const participantOfferToTradeImportByExcelParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeImportByExcelParams): ParticipantOfferToTradeImportByExcel$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeImportByExcel$Params;
    }
    return {
      tradeId: params.tradeId,
      importFileGuid: params.importFileGuid,
    };
  }
};
