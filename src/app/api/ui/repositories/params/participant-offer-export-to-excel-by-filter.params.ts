import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { ParticipantOfferExportToExcelByFilter$Params } from '../../../swagger/fn/participant-offer/participant-offer-export-to-excel-by-filter';
import { apiOfferFilterAltDtoAdapter } from '../../adapters/models/api-offer-filter.adapter';

// @ts-ignore
export interface ParticipantOfferExportToExcelByFilterParams {
  body?: OfferFilterAlt;
}

export function participantOfferExportToExcelByFilterAdapter(params?: ParticipantOfferExportToExcelByFilterParams): ParticipantOfferExportToExcelByFilter$Params {
  if (!params) {
    return {} as ParticipantOfferExportToExcelByFilter$Params;
  }
  return {
      body: apiOfferFilterAltDtoAdapter(params.body),
  };
}
