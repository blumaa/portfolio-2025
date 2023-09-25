import Image from 'next/image'
import Link from 'next/link'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const navHomeText = "aaronblum.co"
  return (
    <section>
      <nav>
        <div>
          <Link href="/">{navHomeText}</Link>
          <h1><Image /></h1>
        </div>
      </nav>
      {children}
    </section>
  )
}

