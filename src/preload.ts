import { contextBridge } from 'electron';
import type { RuntimeInfo } from './common/runtime-info';

declare global {
  interface Window {
    readonly runtimeInfo: RuntimeInfo;
  }
}

/**
 * Exposes basic runtime metadata to the renderer process.
 */
const runtimeInfo: RuntimeInfo = {
  chrome: process.versions.chrome,
  electron: process.versions.electron,
  node: process.versions.node,
};

contextBridge.exposeInMainWorld('runtimeInfo', runtimeInfo);
