import { adaptBubbleToUI } from '../adapters/toUI/bubble.adapter';
import { Bubble } from '../models/bubble.interface';
import { BubblesApiService } from '../../swagger/services/bubbles-api.service';
import { BubblesGetTradeBubbleParams, bubblesGetTradeBubbleParamsAdapter } from './params/bubbles-get-trade-bubble.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BubblesRepository {
  private readonly _api = inject(BubblesApiService);

  bubblesGetTradeBubble(params: BubblesGetTradeBubbleParams): Observable<Bubble> {
    return this._api.bubblesGetTradeBubble(bubblesGetTradeBubbleParamsAdapter.adapt(params)).pipe(
      map((res) => adaptBubbleToUI(res?.data))
    );
  }

}
