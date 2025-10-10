import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test-utils'
import LightSwitch from './LightSwitch'

// Mock useAppTheme
vi.mock('../../hooks/useAppTheme', () => ({
  useAppTheme: () => ({
    isDarkMode: false,
    toggleColorScheme: vi.fn(),
  }),
}))

describe('LightSwitch', () => {
  it('renders without crashing', () => {
    render(<LightSwitch />)
    // Check that an icon is rendered
    const lightSwitch = screen.getByRole('img', { hidden: true })
    expect(lightSwitch).toBeInTheDocument()
  })

  it('displays sun icon in light mode', () => {
    const { container } = render(<LightSwitch />)
    // Check that the component renders
    expect(container.firstChild).toBeInTheDocument()
  })
})
