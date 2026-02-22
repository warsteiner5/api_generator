import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SingleSupplierApiService } from '../../swagger/services/single-supplier-api.service';
import { SingleSupplierGetParams, singleSupplierGetAdapter } from './params/single-supplier-get.params';
import { SingleSupplierTradeView } from '../models/single-supplier-trade-view.interface';
import { singleSupplierTradeViewAdapter } from '../adapters/models/single-supplier-trade-view.adapter';

@Injectable({ providedIn: 'root' })
export class SingleSupplierRepository {
  private readonly _api = inject(SingleSupplierApiService);

  singleSupplierGet(params: SingleSupplierGetParams): Observable<SingleSupplierTradeView> {
    return this._api.singleSupplierGet(singleSupplierGetAdapter(params)).pipe(
      map((res) => singleSupplierTradeViewAdapter(res?.data))
    );
  }

}
