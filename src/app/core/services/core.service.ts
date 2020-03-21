import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CoreService {

  private readonly _userName: BehaviorSubject<string> = new BehaviorSubject<string>('');
  readonly username$ = this._userName.asObservable();

  get username() {
    return this._userName.getValue();
  }

  set username(value: string) {
    this._userName.next(value);
  }

  constructor() { console.log('core service loaded'); }
}
