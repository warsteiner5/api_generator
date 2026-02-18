import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { ParticipantOfferExportToExcelByFilter$Params } from '../../../swagger/fn/participant-offer/participant-offer-export-to-excel-by-filter';
import { adaptApiOfferFilterAltDto } from '../../adapters/toDto/api-offer-filter.adapter';

export interface ParticipantOfferExportToExcelByFilterParams {
  body?: OfferFilterAlt;
}

export const participantOfferExportToExcelByFilterParamsAdapter = {
  adapt(params?: ParticipantOfferExportToExcelByFilterParams): ParticipantOfferExportToExcelByFilter$Params {
    if (!params) {
      return {} as ParticipantOfferExportToExcelByFilter$Params;
    }
    return {
      body: adaptApiOfferFilterAltDto(params.body),
    };
  }
};
