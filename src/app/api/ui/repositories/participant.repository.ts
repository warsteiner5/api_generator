import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ParticipantApiService } from '../../swagger/services/participant-api.service';
import { ParticipantExportToExcelParams, participantExportToExcelAdapter } from './params/participant-export-to-excel.params';
import { ParticipantGetParticipantParams, participantGetParticipantAdapter } from './params/participant-get-participant.params';
import { ParticipantGetParticipantShortInfoParams, participantGetParticipantShortInfoAdapter } from './params/participant-get-participant-short-info.params';
import { ParticipantGetParticipantsParams, participantGetParticipantsAdapter } from './params/participant-get-participants.params';

@Injectable({ providedIn: 'root' })
export class ParticipantRepository {
  private readonly _api = inject(ParticipantApiService);

  participantExportToExcel(params?: ParticipantExportToExcelParams): Observable<Blob> {
    return this._api.participantExportToExcel(participantExportToExcelAdapter(params));
  }

  participantGetParticipant(params: ParticipantGetParticipantParams): Observable<Blob> {
    return this._api.participantGetParticipant(participantGetParticipantAdapter(params));
  }

  participantGetParticipants(params?: ParticipantGetParticipantsParams): Observable<Blob> {
    return this._api.participantGetParticipants(participantGetParticipantsAdapter(params));
  }

  participantGetParticipantShortInfo(params?: ParticipantGetParticipantShortInfoParams): Observable<Blob> {
    return this._api.participantGetParticipantShortInfo(participantGetParticipantShortInfoAdapter(params));
  }

}
