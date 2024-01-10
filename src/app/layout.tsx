import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Barbosa Developer',
  description: "Explore o portfolio de João Barbosa, construído com React, Next, Tailwind CSS e outras tecnologias de ponta. Descubra projetos incríveis e mergulhe nas habilidades inovadoras desse profissional do desenvolvimento web.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
