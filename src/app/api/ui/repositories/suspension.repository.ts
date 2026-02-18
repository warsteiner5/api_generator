import { adaptSuspensionInfoAltToUI } from '../adapters/toUI/suspension-info-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SuspensionApiService } from '../../swagger/services/suspension-api.service';
import { SuspensionGetFullTradeInfoParams, suspensionGetFullTradeInfoParamsAdapter } from './params/suspension-get-full-trade-info.params';
import { SuspensionInfoAlt } from '../models/suspension-info-alt.interface';

@Injectable({ providedIn: 'root' })
export class SuspensionRepository {
  private readonly _api = inject(SuspensionApiService);

  suspensionGetFullTradeInfo(params: SuspensionGetFullTradeInfoParams): Observable<SuspensionInfoAlt> {
    return this._api.suspensionGetFullTradeInfo(suspensionGetFullTradeInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSuspensionInfoAltToUI(res))
    );
  }

}
