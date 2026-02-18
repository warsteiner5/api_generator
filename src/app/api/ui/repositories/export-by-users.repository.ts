import { adaptUserCountersToUI } from '../adapters/toUI/user-counters.adapter';
import { ExportByUsersApiService } from '../../swagger/services/export-by-users-api.service';
import { ExportByUsersGetUserCountersParams, exportByUsersGetUserCountersParamsAdapter } from './params/export-by-users-get-user-counters.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserCounters } from '../models/user-counters.interface';

@Injectable({ providedIn: 'root' })
export class ExportByUsersRepository {
  private readonly _api = inject(ExportByUsersApiService);

  exportByUsersGetUserCounters(params?: ExportByUsersGetUserCountersParams): Observable<UserCounters> {
    return this._api.exportByUsersGetUserCounters(exportByUsersGetUserCountersParamsAdapter.adapt(params)).pipe(
      map((res) => adaptUserCountersToUI(res?.data))
    );
  }

}
