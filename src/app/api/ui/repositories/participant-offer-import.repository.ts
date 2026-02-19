import { adaptCharacteristicToUI } from '../adapters/toUI/characteristic.adapter';
import { adaptParticipantOfferImportTaskToUI } from '../adapters/toUI/participant-offer-import-task.adapter';
import { adaptSearchResultOfParticipantOfferImportTaskGridItemAltToUI } from '../adapters/toUI/search-result-of-participant-offer-import-task-grid-item-alt.adapter';
import { Characteristic } from '../models/characteristic.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantOfferImportApiService } from '../../swagger/services/participant-offer-import-api.service';
import { ParticipantOfferImportApproveCharateristicByIdParams, participantOfferImportApproveCharateristicByIdParamsAdapter } from './params/participant-offer-import-approve-charateristic-by-id.params';
import { ParticipantOfferImportCreateImportTaskExportByParams, participantOfferImportCreateImportTaskExportByParamsAdapter } from './params/participant-offer-import-create-import-task-export-by.params';
import { ParticipantOfferImportCreateImportTaskParams, participantOfferImportCreateImportTaskParamsAdapter } from './params/participant-offer-import-create-import-task.params';
import { ParticipantOfferImportGetCharacteristicsByParticipantOfferParams, participantOfferImportGetCharacteristicsByParticipantOfferParamsAdapter } from './params/participant-offer-import-get-characteristics-by-participant-offer.params';
import { ParticipantOfferImportGetImportTaskParams, participantOfferImportGetImportTaskParamsAdapter } from './params/participant-offer-import-get-import-task.params';
import { ParticipantOfferImportGetImportTasksParams, participantOfferImportGetImportTasksParamsAdapter } from './params/participant-offer-import-get-import-tasks.params';
import { ParticipantOfferImportRestartImportTaskExportByParams, participantOfferImportRestartImportTaskExportByParamsAdapter } from './params/participant-offer-import-restart-import-task-export-by.params';
import { ParticipantOfferImportRestartImportTaskParams, participantOfferImportRestartImportTaskParamsAdapter } from './params/participant-offer-import-restart-import-task.params';
import { ParticipantOfferImportTask } from '../models/participant-offer-import-task.interface';
import { SearchResultOfParticipantOfferImportTaskGridItemAlt } from '../models/search-result-of-participant-offer-import-task-grid-item-alt.interface';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferImportRepository {
  private readonly _api = inject(ParticipantOfferImportApiService);

  participantOfferImportApproveCharateristicById(params: ParticipantOfferImportApproveCharateristicByIdParams): Observable<void> {
    return this._api.participantOfferImportApproveCharateristicById(participantOfferImportApproveCharateristicByIdParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  participantOfferImportCreateImportTask(params?: ParticipantOfferImportCreateImportTaskParams): Observable<number> {
    return this._api.participantOfferImportCreateImportTask(participantOfferImportCreateImportTaskParamsAdapter.adapt(params));
  }

  participantOfferImportCreateImportTaskExportBy(params?: ParticipantOfferImportCreateImportTaskExportByParams): Observable<number> {
    return this._api.participantOfferImportCreateImportTaskExportBy(participantOfferImportCreateImportTaskExportByParamsAdapter.adapt(params));
  }

  participantOfferImportGetCharacteristicsByParticipantOffer(params: ParticipantOfferImportGetCharacteristicsByParticipantOfferParams): Observable<Characteristic[]> {
    return this._api.participantOfferImportGetCharacteristicsByParticipantOffer(participantOfferImportGetCharacteristicsByParticipantOfferParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptCharacteristicToUI(item)))
    );
  }

  participantOfferImportGetImportTask(params: ParticipantOfferImportGetImportTaskParams): Observable<ParticipantOfferImportTask> {
    return this._api.participantOfferImportGetImportTask(participantOfferImportGetImportTaskParamsAdapter.adapt(params)).pipe(
      map((res) => adaptParticipantOfferImportTaskToUI(res))
    );
  }

  participantOfferImportGetImportTasks(params?: ParticipantOfferImportGetImportTasksParams): Observable<SearchResultOfParticipantOfferImportTaskGridItemAlt> {
    return this._api.participantOfferImportGetImportTasks(participantOfferImportGetImportTasksParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSearchResultOfParticipantOfferImportTaskGridItemAltToUI(res))
    );
  }

  participantOfferImportRestartImportTask(params: ParticipantOfferImportRestartImportTaskParams): Observable<number> {
    return this._api.participantOfferImportRestartImportTask(participantOfferImportRestartImportTaskParamsAdapter.adapt(params));
  }

  participantOfferImportRestartImportTaskExportBy(params: ParticipantOfferImportRestartImportTaskExportByParams): Observable<number> {
    return this._api.participantOfferImportRestartImportTaskExportBy(participantOfferImportRestartImportTaskExportByParamsAdapter.adapt(params));
  }

}
