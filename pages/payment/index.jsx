import React from 'react'
import Payment from '../../src/components/payment'
import { Text, Button, Title } from '@mantine/core'
import { ContextModalProps, ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from "@mantine/notifications"
const PaymentPage = () => {
  const TestModal = ({ context, id, innerProps }) => (
    <div className='flex flex-col gap-3'>
      <Title order={5}>{innerProps.titleBody}</Title>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Button color={"orange"} style={{ backgroundColor: "rgba(255, 187, 0, 1)" }} className=" text-gray-900" fullWidth onClick={() => context.closeModal(id)}>
        OK
      </Button>
    </div>
  );

  return (
    <div className="bg-slate-50 h-screen">
      <NotificationsProvider>
        <ModalsProvider modals={{ demonstration: TestModal /* ...other modals */ }}>
          <Payment />
        </ModalsProvider>
      </NotificationsProvider>

    </div>
  )
}

export default PaymentPage