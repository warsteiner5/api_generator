import { ParticipantOfferExportToExcel$Params } from '../../../swagger/fn/participant-offer/participant-offer-export-to-excel';

export interface ParticipantOfferExportToExcelParams {
  body?: number[];
}

export const participantOfferExportToExcelParamsAdapter = {
  adapt(params?: ParticipantOfferExportToExcelParams): ParticipantOfferExportToExcel$Params {
    if (!params) {
      return {} as ParticipantOfferExportToExcel$Params;
    }
    return {
      body: params.body,
    };
  }
};
