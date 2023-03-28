abstract class EventBase<T = void> {
  protected subscribers: Record<string, (payload: T) => void> = {};

  private onceSubscribers: Record<string, (payload: T) => void> = {};

  protected handle?: () => void;

  static generateId() {
    return Date.now();
  }

  protected _emit(payload: T) {
    if (this.handle) {
      this.handle();
    }
    Object.values(this.subscribers).forEach((cb) => cb(payload));
    Object.entries(this.onceSubscribers).forEach(([id, cb]) => {
      cb(payload);
      delete this.onceSubscribers[id];
    });
  }

  public subscribe(cb: (payload: T) => void) {
    const id = EventBase.generateId();
    this.subscribers[id] = cb;
    return () => this.unsubscribe(String(id));
  }

  public once(cb: (payload: T) => void) {
    const id = EventBase.generateId();
    this.onceSubscribers[id] = cb;
    return () => this.cancel(String(id));
  }

  private cancel(id: string) {
    if (Object.keys(this.subscribers).includes(id)) {
      delete this.onceSubscribers[id];
      return true;
    }
    console.error('Already canceled');
    return false;
  }

  private unsubscribe(id: string) {
    if (Object.keys(this.subscribers).includes(id)) {
      delete this.subscribers[id];
      return true;
    }
    console.error('Already unsubscribed');
    return false;
  }
}

export { EventBase };
