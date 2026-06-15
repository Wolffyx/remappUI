// React 19's @types dropped the implicit global `JSX` namespace in some configs.
// The shadcn components return `JSX.Element`; re-expose it from React's namespace
// so the package type-checks standalone without editing every component.
import type * as React from 'react'

declare global {
    namespace JSX {
        type Element = React.JSX.Element
        type ElementType = React.JSX.ElementType
        interface IntrinsicElements extends React.JSX.IntrinsicElements {}
    }
}

export {}
