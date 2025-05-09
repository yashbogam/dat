import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "DataMaster - Medical Research Platform",
  description: "Access high-quality healthcare data to accelerate your research, analytics, and ML projects.",
  openGraph: {
    title: "DataMaster - Advancing Medical Research",
    description: "High-quality healthcare data, analytics, and ML projects.",
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'DataMaster Social Card',
      },
    ],
    type: 'website',
    siteName: 'DataMaster',
  },
  twitter: {
    card: 'summary_large_image',
    title: "DataMaster - Advancing Medical Research",
    description: "High-quality healthcare data, analytics, and ML projects.",
    images: ['/api/og'],
  },
  other: {
    'preconnect': 'https://images.unsplash.com',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}