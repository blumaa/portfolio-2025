import Link from 'next/link'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const navHomeText = "<-- back to home"
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href="/">{navHomeText}</Link>
      </nav>

      {children}
    </section>
  )
}

