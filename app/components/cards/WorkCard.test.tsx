import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test-utils'
import WorkCard from './WorkCard'
import { Job } from '../../globals/jobs'

// Mock useAppTheme
vi.mock('../../hooks/useAppTheme', () => ({
  useAppTheme: () => ({
    isDarkMode: false,
    toggleColorScheme: vi.fn(),
  }),
}))

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('WorkCard', () => {
  const mockJob: Job = {
    companyName: 'Test Company',
    jobTitle: 'Software Engineer',
    location: 'San Francisco',
    timeSpan: '2020-2021',
    description: 'Built amazing things',
    learning: 'Learned React',
    category: 'coding',
    link: 'https://example.com',
  }

  it('renders job information correctly', () => {
    render(<WorkCard job={mockJob} />)

    expect(screen.getByText('Test Company')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText(/San Francisco/)).toBeInTheDocument()
    expect(screen.getByText(/2020-2021/)).toBeInTheDocument()
    expect(screen.getByText(/Built amazing things/)).toBeInTheDocument()
    expect(screen.getByText(/Learned React/)).toBeInTheDocument()
  })

  it('renders link with correct href', () => {
    render(<WorkCard job={mockJob} />)

    const link = screen.getByText('Test Company').closest('a')
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
