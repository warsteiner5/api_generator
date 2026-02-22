import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SuspensionApiService } from '../../swagger/services/suspension-api.service';
import { SuspensionGetFullTradeInfoParams, suspensionGetFullTradeInfoAdapter } from './params/suspension-get-full-trade-info.params';
import { SuspensionInfoAlt } from '../models/suspension-info-alt.interface';
import { suspensionInfoAltAdapter } from '../adapters/models/suspension-info-alt.adapter';

@Injectable({ providedIn: 'root' })
export class SuspensionRepository {
  private readonly _api = inject(SuspensionApiService);

  suspensionGetFullTradeInfo(params: SuspensionGetFullTradeInfoParams): Observable<SuspensionInfoAlt> {
    return this._api.suspensionGetFullTradeInfo(suspensionGetFullTradeInfoAdapter(params)).pipe(
      map((res) => suspensionInfoAltAdapter(res))
    );
  }

}
