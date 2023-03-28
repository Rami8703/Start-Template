import { EventEmitter } from './EventEmmiter';

class AppReady extends EventEmitter {}

const appReady = new AppReady();

export { appReady };
