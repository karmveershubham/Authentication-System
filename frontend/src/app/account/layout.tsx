import Navbar from '@/components/Navbar'
import { ReactNode } from 'react';

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default AccountLayout