import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {

  private readonly _name: BehaviorSubject<string> = new BehaviorSubject<string>('');
  readonly name$ = this._name.asObservable();

  get name() {
    return this._name.getValue();
  }

  set name(value: string) {
    this._name.next(value);
  }

  constructor() {
    console.log('shared service loaded');
  }
}
