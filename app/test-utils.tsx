import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppThemeProvider } from './providers/AppThemeProvider'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <AppThemeProvider>{children}</AppThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
