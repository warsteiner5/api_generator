import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantApiService } from '../../swagger/services/participant-api.service';
import { ParticipantExportToExcelParams, participantExportToExcelParamsAdapter } from './params/participant-export-to-excel.params';
import { ParticipantGetParticipantParams, participantGetParticipantParamsAdapter } from './params/participant-get-participant.params';
import { ParticipantGetParticipantShortInfoParams, participantGetParticipantShortInfoParamsAdapter } from './params/participant-get-participant-short-info.params';
import { ParticipantGetParticipantsParams, participantGetParticipantsParamsAdapter } from './params/participant-get-participants.params';

@Injectable({ providedIn: 'root' })
export class ParticipantRepository {
  private readonly _api = inject(ParticipantApiService);

  participantExportToExcel(params?: ParticipantExportToExcelParams): Observable<Blob> {
    return this._api.participantExportToExcel(participantExportToExcelParamsAdapter.adapt(params));
  }

  participantGetParticipant(params: ParticipantGetParticipantParams): Observable<Blob> {
    return this._api.participantGetParticipant(participantGetParticipantParamsAdapter.adapt(params));
  }

  participantGetParticipants(params?: ParticipantGetParticipantsParams): Observable<Blob> {
    return this._api.participantGetParticipants(participantGetParticipantsParamsAdapter.adapt(params));
  }

  participantGetParticipantShortInfo(params?: ParticipantGetParticipantShortInfoParams): Observable<Blob> {
    return this._api.participantGetParticipantShortInfo(participantGetParticipantShortInfoParamsAdapter.adapt(params));
  }

}
