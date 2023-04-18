'use client'

import React from 'react'

import SupabaseProvider from './SupabaseProvider'
import { TamaguiProvider } from './TamaguiProvider'
import { ToastProvider } from './ToastProvider'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <TamaguiProvider>
            <ToastProvider>{children}</ToastProvider>
          </TamaguiProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}