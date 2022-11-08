import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PimFormSubscriber {
  protected subscriptions: Map<number, Subscription>;
  constructor() {
    this.subscriptions = new Map();
  }

  addInPool(attributeId: number, obs: Observable<any>) {
    if (!this.subscriptions.has(attributeId)) {
      this.subscriptions.set(attributeId, obs.subscribe());
    }
  }

  removeFromPool(attributeId: number) {
    if (this.subscriptions.has(attributeId)) {
      this.subscriptions.get(attributeId).unsubscribe();
      this.subscriptions.delete(attributeId);
    }
  }
}
