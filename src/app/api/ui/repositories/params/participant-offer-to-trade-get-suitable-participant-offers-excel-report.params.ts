import { ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params } from '../../../swagger/fn/participant-offer-to-trade/participant-offer-to-trade-get-suitable-participant-offers-excel-report';

// @ts-ignore
export interface ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams {
  tradeId: number;
}

export function participantOfferToTradeGetSuitableParticipantOffersExcelReportAdapter(params?: ParticipantOfferToTradeGetSuitableParticipantOffersExcelReportParams): ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params {
  if (!params) {
    return {} as ParticipantOfferToTradeGetSuitableParticipantOffersExcelReport$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
