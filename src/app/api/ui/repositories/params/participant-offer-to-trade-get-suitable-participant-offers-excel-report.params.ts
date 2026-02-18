import { ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-suitable-participant-offers-excel-report';

export interface ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams {
  tradeId: number;
}

export const participantOfferToTradeGetSuitableParticipantOffersExcelReportParamsAdapter = {
  adapt(params?: ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams): ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params {
    if (!params) {
      return {} as ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
