import { FederalLaw } from '../models/federal-law.interface';
import { federalLawAdapter } from '../adapters/models/federal-law.adapter';
import { FederalLawsApiService } from '../../swagger/services/federal-laws-api.service';
import { FederalLawsGetAllParams, federalLawsGetAllAdapter } from './params/federal-laws-get-all.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FederalLawsRepository {
  private readonly _api = inject(FederalLawsApiService);

  federalLawsGetAll(params?: FederalLawsGetAllParams): Observable<FederalLaw[]> {
    return this._api.federalLawsGetAll(federalLawsGetAllAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => federalLawAdapter(item)))
    );
  }

}
