import { Injectable, inject } from '@angular/core';
import { KladrRegionApiService } from '../../swagger/services/kladr-region-api.service';
import { KladrRegionGetParams, kladrRegionGetAdapter } from './params/kladr-region-get.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class KladrRegionRepository {
  private readonly _api = inject(KladrRegionApiService);

  kladrRegionGet(params?: KladrRegionGetParams): Observable<Blob> {
    return this._api.kladrRegionGet(kladrRegionGetAdapter(params));
  }

}
