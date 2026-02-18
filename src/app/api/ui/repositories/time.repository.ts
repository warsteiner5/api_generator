import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TimeApiService } from '../../swagger/services/time-api.service';
import { TimeGetServerTimeUtcParams, timeGetServerTimeUtcParamsAdapter } from './params/time-get-server-time-utc.params';

@Injectable({ providedIn: 'root' })
export class TimeRepository {
  private readonly _api = inject(TimeApiService);

  timeGetServerTimeUtc(params?: TimeGetServerTimeUtcParams): Observable<string> {
    return this._api.timeGetServerTimeUtc(timeGetServerTimeUtcParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
