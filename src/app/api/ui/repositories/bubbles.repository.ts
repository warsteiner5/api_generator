import { Bubble } from '../models/bubble.interface';
import { bubbleAdapter } from '../adapters/models/bubble.adapter';
import { BubblesApiService } from '../../swagger/services/bubbles-api.service';
import { BubblesGetTradeBubbleParams, bubblesGetTradeBubbleAdapter } from './params/bubbles-get-trade-bubble.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BubblesRepository {
  private readonly _api = inject(BubblesApiService);

  bubblesGetTradeBubble(params: BubblesGetTradeBubbleParams): Observable<Bubble> {
    return this._api.bubblesGetTradeBubble(bubblesGetTradeBubbleAdapter(params)).pipe(
      map((res) => bubbleAdapter(res?.data))
    );
  }

}
