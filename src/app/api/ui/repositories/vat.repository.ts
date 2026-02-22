import { Injectable, inject } from '@angular/core';
import { LotPriceAlt } from '../models/lot-price-alt.interface';
import { lotPriceAltAdapter } from '../adapters/models/lot-price-alt.adapter';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VatApiService } from '../../swagger/services/vat-api.service';
import { VatCalculateSumApplyVatParams, vatCalculateSumApplyVatAdapter } from './params/vat-calculate-sum-apply-vat.params';
import { VatCalculateSumFromPositionsApplyVatParams, vatCalculateSumFromPositionsApplyVatAdapter } from './params/vat-calculate-sum-from-positions-apply-vat.params';
import { VatGetPriceApplyVatParams, vatGetPriceApplyVatAdapter } from './params/vat-get-price-apply-vat.params';

@Injectable({ providedIn: 'root' })
export class VatRepository {
  private readonly _api = inject(VatApiService);

  vatCalculateSumApplyVat(params: VatCalculateSumApplyVatParams): Observable<LotPriceAlt> {
    return this._api.vatCalculateSumApplyVat(vatCalculateSumApplyVatAdapter(params)).pipe(
      map((res) => lotPriceAltAdapter(res?.data))
    );
  }

  vatCalculateSumFromPositionsApplyVat(params: VatCalculateSumFromPositionsApplyVatParams): Observable<LotPriceAlt> {
    return this._api.vatCalculateSumFromPositionsApplyVat(vatCalculateSumFromPositionsApplyVatAdapter(params)).pipe(
      map((res) => lotPriceAltAdapter(res?.data))
    );
  }

  vatGetPriceApplyVat(params: VatGetPriceApplyVatParams): Observable<number> {
    return this._api.vatGetPriceApplyVat(vatGetPriceApplyVatAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
