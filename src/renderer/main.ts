/// <reference path="./App.js.d.ts" />
import { createApp } from 'vue';
import App from './App.js';
import type { RuntimeInfo } from '../common/runtime-info';

declare global {
  interface Window {
    readonly runtimeInfo: RuntimeInfo;
  }
}

const runtimeInfo: RuntimeInfo = window.runtimeInfo;

createApp(App, { runtimeInfo }).mount('#app');
