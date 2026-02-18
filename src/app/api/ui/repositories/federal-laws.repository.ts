import { adaptFederalLawToUI } from '../adapters/toUI/federal-law.adapter';
import { FederalLaw } from '../models/federal-law.interface';
import { FederalLawsApiService } from '../../swagger/services/federal-laws-api.service';
import { FederalLawsGetAllParams, federalLawsGetAllParamsAdapter } from './params/federal-laws-get-all.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FederalLawsRepository {
  private readonly _api = inject(FederalLawsApiService);

  federalLawsGetAll(params?: FederalLawsGetAllParams): Observable<FederalLaw[]> {
    return this._api.federalLawsGetAll(federalLawsGetAllParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptFederalLawToUI(item)))
    );
  }

}
