import type { DefineComponent } from 'vue';

declare const component: DefineComponent<
  { readonly runtimeInfo: import('../common/runtime-info').RuntimeInfo },
  object,
  object
>;

export default component;
