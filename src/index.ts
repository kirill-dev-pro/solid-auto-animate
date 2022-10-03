import autoAnimateBase from '@formkit/auto-animate'
import type {
  AutoAnimationPlugin,
  AutoAnimateOptions,
} from '@formkit/auto-animate'
import { createEffect } from 'solid-js'

declare module 'solid-js' {
  // eslint-disable-next-line no-unused-vars
  namespace JSX {
    // eslint-disable-next-line no-unused-vars
    interface Directives {
      autoAnimate: Partial<AutoAnimateOptions> | AutoAnimationPlugin | true
    }
  }
}

export function autoAnimate<T extends HTMLElement>(
  el: T,
  options: () => Partial<AutoAnimateOptions> | AutoAnimationPlugin | true,
): void {
  createEffect(() => {
    const currentOptions = options()
    autoAnimateBase(el, currentOptions === true ? {} : currentOptions)
  })
}

export function useAutoAnimate<T extends HTMLElement>(
  el: () => T,
  options: Partial<AutoAnimateOptions> | AutoAnimationPlugin,
) {
  createEffect(() => {
    autoAnimateBase(el(), options)
  })
}
