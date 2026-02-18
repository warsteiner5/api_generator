import { adaptLotPriceAltToUI } from '../adapters/toUI/lot-price-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { LotPriceAlt } from '../models/lot-price-alt.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VatApiService } from '../../swagger/services/vat-api.service';
import { VatCalculateSumApplyVatParams, vatCalculateSumApplyVatParamsAdapter } from './params/vat-calculate-sum-apply-vat.params';
import { VatCalculateSumFromPositionsApplyVatParams, vatCalculateSumFromPositionsApplyVatParamsAdapter } from './params/vat-calculate-sum-from-positions-apply-vat.params';
import { VatGetPriceApplyVatParams, vatGetPriceApplyVatParamsAdapter } from './params/vat-get-price-apply-vat.params';

@Injectable({ providedIn: 'root' })
export class VatRepository {
  private readonly _api = inject(VatApiService);

  vatCalculateSumApplyVat(params: VatCalculateSumApplyVatParams): Observable<LotPriceAlt> {
    return this._api.vatCalculateSumApplyVat(vatCalculateSumApplyVatParamsAdapter.adapt(params)).pipe(
      map((res) => adaptLotPriceAltToUI(res?.data))
    );
  }

  vatCalculateSumFromPositionsApplyVat(params: VatCalculateSumFromPositionsApplyVatParams): Observable<LotPriceAlt> {
    return this._api.vatCalculateSumFromPositionsApplyVat(vatCalculateSumFromPositionsApplyVatParamsAdapter.adapt(params)).pipe(
      map((res) => adaptLotPriceAltToUI(res?.data))
    );
  }

  vatGetPriceApplyVat(params: VatGetPriceApplyVatParams): Observable<number> {
    return this._api.vatGetPriceApplyVat(vatGetPriceApplyVatParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
