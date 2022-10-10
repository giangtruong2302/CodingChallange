import React from 'react'
import Payment from '../../src/components/payment'
import { NotificationsProvider } from "@mantine/notifications"
const PaymentPage = () => {
  return (
    <div>
      <NotificationsProvider>
        <Payment />
      </NotificationsProvider>

    </div>
  )
}

export default PaymentPage