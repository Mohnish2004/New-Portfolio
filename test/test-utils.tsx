import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function render(ui: React.ReactElement, options = {}) {
  return rtlRender(
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        {ui}
      </NextThemesProvider>
    </NextUIProvider>,
    options
  )
}

export * from '@testing-library/react'
export { render }