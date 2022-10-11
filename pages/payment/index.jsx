import React from 'react'
import Payment from '../../src/components/payment'
import { NotificationsProvider } from "@mantine/notifications"
const PaymentPage = () => {
  return (
    <div className="bg-slate-50 h-screen">
      <NotificationsProvider>
        <Payment />
      </NotificationsProvider>

    </div>
  )
}

export default PaymentPage