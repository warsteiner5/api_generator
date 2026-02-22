import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SupplierFinanceApiService } from '../../swagger/services/supplier-finance-api.service';
import { SupplierFinanceTransitionToRtsTenderProParams, supplierFinanceTransitionToRtsTenderProAdapter } from './params/supplier-finance-transition-to-rts-tender-pro.params';

@Injectable({ providedIn: 'root' })
export class SupplierFinanceRepository {
  private readonly _api = inject(SupplierFinanceApiService);

  supplierFinanceTransitionToRtsTenderPro(params: SupplierFinanceTransitionToRtsTenderProParams): Observable<Blob> {
    return this._api.supplierFinanceTransitionToRtsTenderPro(supplierFinanceTransitionToRtsTenderProAdapter(params));
  }

}
