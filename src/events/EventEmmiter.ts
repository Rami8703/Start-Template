import { EventBase } from './EventBase';

abstract class EventEmitter<T = void> extends EventBase<T> {
  public emit(payload: T) {
    this._emit(payload);
  }
}

export { EventEmitter };
