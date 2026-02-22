import { Characteristic } from '../models/characteristic.interface';
import { characteristicAdapter } from '../adapters/models/characteristic.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ParticipantOfferImportApiService } from '../../swagger/services/participant-offer-import-api.service';
import { ParticipantOfferImportApproveCharateristicByIdParams, participantOfferImportApproveCharateristicByIdAdapter } from './params/participant-offer-import-approve-charateristic-by-id.params';
import { ParticipantOfferImportCreateImportTaskExportByParams, participantOfferImportCreateImportTaskExportByAdapter } from './params/participant-offer-import-create-import-task-export-by.params';
import { ParticipantOfferImportCreateImportTaskParams, participantOfferImportCreateImportTaskAdapter } from './params/participant-offer-import-create-import-task.params';
import { ParticipantOfferImportGetCharacteristicsByParticipantOfferParams, participantOfferImportGetCharacteristicsByParticipantOfferAdapter } from './params/participant-offer-import-get-characteristics-by-participant-offer.params';
import { ParticipantOfferImportGetImportTaskParams, participantOfferImportGetImportTaskAdapter } from './params/participant-offer-import-get-import-task.params';
import { ParticipantOfferImportGetImportTasksParams, participantOfferImportGetImportTasksAdapter } from './params/participant-offer-import-get-import-tasks.params';
import { ParticipantOfferImportRestartImportTaskExportByParams, participantOfferImportRestartImportTaskExportByAdapter } from './params/participant-offer-import-restart-import-task-export-by.params';
import { ParticipantOfferImportRestartImportTaskParams, participantOfferImportRestartImportTaskAdapter } from './params/participant-offer-import-restart-import-task.params';
import { ParticipantOfferImportTask } from '../models/participant-offer-import-task.interface';
import { participantOfferImportTaskAdapter } from '../adapters/models/participant-offer-import-task.adapter';
import { SearchResultOfParticipantOfferImportTaskGridItemAlt } from '../models/search-result-of-participant-offer-import-task-grid-item-alt.interface';
import { searchResultOfParticipantOfferImportTaskGridItemAltAdapter } from '../adapters/models/search-result-of-participant-offer-import-task-grid-item-alt.adapter';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferImportRepository {
  private readonly _api = inject(ParticipantOfferImportApiService);

  participantOfferImportApproveCharateristicById(params: ParticipantOfferImportApproveCharateristicByIdParams): Observable<void> {
    return this._api.participantOfferImportApproveCharateristicById(participantOfferImportApproveCharateristicByIdAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  participantOfferImportCreateImportTask(params?: ParticipantOfferImportCreateImportTaskParams): Observable<number> {
    return this._api.participantOfferImportCreateImportTask(participantOfferImportCreateImportTaskAdapter(params));
  }

  participantOfferImportCreateImportTaskExportBy(params?: ParticipantOfferImportCreateImportTaskExportByParams): Observable<number> {
    return this._api.participantOfferImportCreateImportTaskExportBy(participantOfferImportCreateImportTaskExportByAdapter(params));
  }

  participantOfferImportGetCharacteristicsByParticipantOffer(params: ParticipantOfferImportGetCharacteristicsByParticipantOfferParams): Observable<Characteristic[]> {
    return this._api.participantOfferImportGetCharacteristicsByParticipantOffer(participantOfferImportGetCharacteristicsByParticipantOfferAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => characteristicAdapter(item)))
    );
  }

  participantOfferImportGetImportTask(params: ParticipantOfferImportGetImportTaskParams): Observable<ParticipantOfferImportTask> {
    return this._api.participantOfferImportGetImportTask(participantOfferImportGetImportTaskAdapter(params)).pipe(
      map((res) => participantOfferImportTaskAdapter(res))
    );
  }

  participantOfferImportGetImportTasks(params?: ParticipantOfferImportGetImportTasksParams): Observable<SearchResultOfParticipantOfferImportTaskGridItemAlt> {
    return this._api.participantOfferImportGetImportTasks(participantOfferImportGetImportTasksAdapter(params)).pipe(
      map((res) => searchResultOfParticipantOfferImportTaskGridItemAltAdapter(res))
    );
  }

  participantOfferImportRestartImportTask(params: ParticipantOfferImportRestartImportTaskParams): Observable<number> {
    return this._api.participantOfferImportRestartImportTask(participantOfferImportRestartImportTaskAdapter(params));
  }

  participantOfferImportRestartImportTaskExportBy(params: ParticipantOfferImportRestartImportTaskExportByParams): Observable<number> {
    return this._api.participantOfferImportRestartImportTaskExportBy(participantOfferImportRestartImportTaskExportByAdapter(params));
  }

}
