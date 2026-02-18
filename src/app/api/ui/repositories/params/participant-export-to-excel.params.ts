import { ParticipantExportToExcel$Params } from '../../../swagger/fn/participant/participant-export-to-excel';
import { ParticipantFilterObjectAlt } from '../../models/participant-filter-object-alt.interface';
import { adaptApiParticipantFilterObjectAltDto } from '../../adapters/toDto/api-participant-filter-object.adapter';

export interface ParticipantExportToExcelParams {
  body?: ParticipantFilterObjectAlt;
}

export const participantExportToExcelParamsAdapter = {
  adapt(params?: ParticipantExportToExcelParams): ParticipantExportToExcel$Params {
    if (!params) {
      return {} as ParticipantExportToExcel$Params;
    }
    return {
      body: adaptApiParticipantFilterObjectAltDto(params.body),
    };
  }
};
