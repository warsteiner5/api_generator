import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OkeiApiService } from '../../swagger/services/okei-api.service';
import { OkeiGetParams, okeiGetParamsAdapter } from './params/okei-get.params';

@Injectable({ providedIn: 'root' })
export class OkeiRepository {
  private readonly _api = inject(OkeiApiService);

  okeiGet(params?: OkeiGetParams): Observable<Blob> {
    return this._api.okeiGet(okeiGetParamsAdapter.adapt(params));
  }

}
