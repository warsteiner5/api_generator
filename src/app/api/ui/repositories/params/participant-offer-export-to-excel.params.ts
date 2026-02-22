import { ParticipantOfferExportToExcel$Params } from '../../../swagger/fn/participant-offer/participant-offer-export-to-excel';

// @ts-ignore
export interface ParticipantOfferExportToExcelParams {
  body?: number[];
}

export function participantOfferExportToExcelAdapter(params?: ParticipantOfferExportToExcelParams): ParticipantOfferExportToExcel$Params {
  if (!params) {
    return {} as ParticipantOfferExportToExcel$Params;
  }
  return {
      body: params.body,
  };
}
