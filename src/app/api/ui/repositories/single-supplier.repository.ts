import { adaptSingleSupplierTradeViewToUI } from '../adapters/toUI/single-supplier-trade-view.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SingleSupplierApiService } from '../../swagger/services/single-supplier-api.service';
import { SingleSupplierGetParams, singleSupplierGetParamsAdapter } from './params/single-supplier-get.params';
import { SingleSupplierTradeView } from '../models/single-supplier-trade-view.interface';

@Injectable({ providedIn: 'root' })
export class SingleSupplierRepository {
  private readonly _api = inject(SingleSupplierApiService);

  singleSupplierGet(params: SingleSupplierGetParams): Observable<SingleSupplierTradeView> {
    return this._api.singleSupplierGet(singleSupplierGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSingleSupplierTradeViewToUI(res?.data))
    );
  }

}
