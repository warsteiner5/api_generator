import { ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-import-trade-lot-application-specifications-from-excel';

// @ts-ignore
export interface ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParams {
  tradeId: number;
  fileGuid: string;
}

export function participantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelAdapter(params?: ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcelParams): ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeImportTradeLotApplicationSpecificationsFromExcel$Params;
  }
  return {
      tradeId: params.tradeId,
      fileGuid: params.fileGuid,
  };
}
