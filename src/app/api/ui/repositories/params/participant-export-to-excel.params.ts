import { ParticipantExportToExcel$Params } from '../../../swagger/fn/participant/participant-export-to-excel';
import { ParticipantFilterObjectAlt } from '../../models/participant-filter-object-alt.interface';
import { apiParticipantFilterObjectAltDtoAdapter } from '../../adapters/models/api-participant-filter-object.adapter';

// @ts-ignore
export interface ParticipantExportToExcelParams {
  body?: ParticipantFilterObjectAlt;
}

export function participantExportToExcelAdapter(params?: ParticipantExportToExcelParams): ParticipantExportToExcel$Params {
  if (!params) {
    return {} as ParticipantExportToExcel$Params;
  }
  return {
      body: apiParticipantFilterObjectAltDtoAdapter(params.body),
  };
}
