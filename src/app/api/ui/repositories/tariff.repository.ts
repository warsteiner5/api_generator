import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TariffApiService } from '../../swagger/services/tariff-api.service';
import { TariffGetLicenseRewardParams, tariffGetLicenseRewardParamsAdapter } from './params/tariff-get-license-reward.params';

@Injectable({ providedIn: 'root' })
export class TariffRepository {
  private readonly _api = inject(TariffApiService);

  tariffGetLicenseReward(params: TariffGetLicenseRewardParams): Observable<Blob> {
    return this._api.tariffGetLicenseReward(tariffGetLicenseRewardParamsAdapter.adapt(params));
  }

}
