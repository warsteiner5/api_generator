import { Injectable, inject } from '@angular/core';
import { ItemApiService } from '../../swagger/services/item-api.service';
import { ItemCalculateSumParams, itemCalculateSumAdapter } from './params/item-calculate-sum.params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemRepository {
  private readonly _api = inject(ItemApiService);

  itemCalculateSum(params?: ItemCalculateSumParams): Observable<number> {
    return this._api.itemCalculateSum(itemCalculateSumAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
