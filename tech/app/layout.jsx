import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Harsh | Full-Stack & AI Engineer',
  description: 'Full-Stack & AI Engineer building scalable web apps and smart AI workflows',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body className="p-4 md:p-8">
        <Script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  )
}
