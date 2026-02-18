import { adaptFinanceSourceToUI } from '../adapters/toUI/finance-source.adapter';
import { FinanceSource } from '../models/finance-source.interface';
import { FinanceSourcesApiService } from '../../swagger/services/finance-sources-api.service';
import { FinanceSourcesGetAllParams, financeSourcesGetAllParamsAdapter } from './params/finance-sources-get-all.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FinanceSourcesRepository {
  private readonly _api = inject(FinanceSourcesApiService);

  financeSourcesGetAll(params?: FinanceSourcesGetAllParams): Observable<FinanceSource[]> {
    return this._api.financeSourcesGetAll(financeSourcesGetAllParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptFinanceSourceToUI(item)))
    );
  }

}
