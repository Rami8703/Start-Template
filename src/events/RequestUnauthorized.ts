import { EventEmitter } from './EventEmmiter';

class RequestUnauthorized extends EventEmitter {}

const requestUnauthorized = new RequestUnauthorized();

export { requestUnauthorized };
