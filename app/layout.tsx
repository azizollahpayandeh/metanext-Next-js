"use client"
import type { Metadata } from 'next'
import { RecoilRoot } from 'recoil'
import { createContext } from 'react'
import NavBar from '@/components/templates/Home/Navbar/NavBar'
import Footer from '@/components/templates/Home/Footer/Footer'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './globals.css'


  export default function ThemeProvider({ children  }:any) {

    const queryClient = new QueryClient()

  return (
    <html dir='rtl' lang="fa">
      <body >
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <NavBar/>
          {children}
          <Footer/>
        </RecoilRoot>
        </QueryClientProvider>
        </body>
    </html>
  )
}
