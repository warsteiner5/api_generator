import { BelgorodBudgetsApiService } from '../../swagger/services/belgorod-budgets-api.service';
import { BelgorodBudgetsGetBelgorodBudgetsParams, belgorodBudgetsGetBelgorodBudgetsAdapter } from './params/belgorod-budgets-get-belgorod-budgets.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BelgorodBudgetsRepository {
  private readonly _api = inject(BelgorodBudgetsApiService);

  belgorodBudgetsGetBelgorodBudgets(params: BelgorodBudgetsGetBelgorodBudgetsParams): Observable<Blob> {
    return this._api.belgorodBudgetsGetBelgorodBudgets(belgorodBudgetsGetBelgorodBudgetsAdapter(params));
  }

}
