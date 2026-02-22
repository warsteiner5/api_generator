import { FinanceSource } from '../models/finance-source.interface';
import { financeSourceAdapter } from '../adapters/models/finance-source.adapter';
import { FinanceSourcesApiService } from '../../swagger/services/finance-sources-api.service';
import { FinanceSourcesGetAllParams, financeSourcesGetAllAdapter } from './params/finance-sources-get-all.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FinanceSourcesRepository {
  private readonly _api = inject(FinanceSourcesApiService);

  financeSourcesGetAll(params?: FinanceSourcesGetAllParams): Observable<FinanceSource[]> {
    return this._api.financeSourcesGetAll(financeSourcesGetAllAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => financeSourceAdapter(item)))
    );
  }

}
