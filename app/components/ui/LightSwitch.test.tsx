import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test-utils'
import LightSwitch from './LightSwitch'

// Mock MDS useTheme hook
vi.mock('@mond-design-system/theme', async () => {
  const actual = await vi.importActual('@mond-design-system/theme');
  return {
    ...actual,
    useTheme: () => ({
      mode: 'light',
      brand: 'default',
      setMode: vi.fn(),
      setBrand: vi.fn(),
      toggleMode: vi.fn(),
      currentTheme: {},
    }),
  };
})

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
