import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head />
      <body className='bg-stone-900 text-white'>{children}</body>
    </html>
  )
}
