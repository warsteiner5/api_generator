import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionApiService } from '../../swagger/services/region-api.service';
import { RegionGetParams, regionGetParamsAdapter } from './params/region-get.params';

@Injectable({ providedIn: 'root' })
export class RegionRepository {
  private readonly _api = inject(RegionApiService);

  regionGet(params?: RegionGetParams): Observable<Blob> {
    return this._api.regionGet(regionGetParamsAdapter.adapt(params));
  }

}
