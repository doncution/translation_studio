declare module '*.js' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    { readonly runtimeInfo: import('../common/runtime-info').RuntimeInfo },
    object,
    object
  >;
  export default component;
}
