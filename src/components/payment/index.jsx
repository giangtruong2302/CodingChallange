import React from 'react'
import { Typography } from 'antd';
import visa from '../../../public/visa.svg'
import { Button, SimpleGrid, Text, createStyles, ThemeIcon } from '@mantine/core'
import Image from 'next/image';
import bank from '../../../public/visa-2.svg'
import { openContextModal } from '@mantine/modals'
import { Check, CheckCircle, Warning } from "phosphor-react";
import Rates from './rates';
import { Footer } from 'antd/lib/layout/layout';
import BankInfo from './bank-info';

const Payment = () => {
  const [donation, setDonation] = React.useState(false)
  const [payWithVisa, setPayWithVisa] = React.useState(true)
  const success = () => {
    setDonation(true)
    openContextModal({
      modal: 'demonstration',
      IconClose: false,
      centered: true,
      withCloseButton: false,
      title: (<ThemeIcon size={56} color={"#DFF6DE"} radius={"50%"}><Check weight="fill" size={40} color="green" /></ThemeIcon>),
      innerProps: {
        titleBody: "Thanh toán thành công",
        modalBody:
          'Xin chân thành cảm ơn sự ủng hộ của Quý khách hàng',
      },
    })

  };
  const fail = () => {
    openContextModal({
      modal: 'demonstration',
      IconClose: false,
      centered: true,
      withCloseButton: false,
      title: (<ThemeIcon size={56} color={"#FBE2E2"} radius={"50%"}><Warning weight="fill" size={40} color="red" /></ThemeIcon>),
      innerProps: {
        titleBody: "Đã có lỗi thanh toán",
        modalBody:
          'Thanh toán thất bại. Vui lòng thử lại',
      },
    })
  };
  return (
    <>
      <SimpleGrid span={12}>
        <div className="flex flex-col h-screen bg-slate-100">
          <div className='bg-white pt-5 pl-3 pb-0 pr-3 top-0 sticky z-10'> <Typography.Title level={3}>Ủng hộ chống dịch Covid 19</Typography.Title></div>
          <div className='flex flex-col'>
            <div className='p-2 font-bold text-gray-500 uppercase text-xs'>
              Chọn hình thức quyên góp
            </div>
            <div className='flex flex-col bg-white' >
              <div className='flex flex-row justify-between pl-3 pr-3 pt-4 pb-4  border-b-slate-100 border-b-2 border-b-solid h-max justify-items-center' onClick={() => { setPayWithVisa(true) }}>
                <div className="flex flex-row gap-3.5 ">
                  <Image src={visa} width={25} height={15} alt="visa-method" /> <Typography.Text className='text-black text-sm font-normal'>Visa...2725</Typography.Text>
                </div>
                {payWithVisa ? (<Check size={16} />) : (null)}
              </div>

              <div className='flex flex-row justify-between  border-b-slate-100 border-b-2 border-b-solid pl-3 pr-3 pt-4 pb-4' onClick={() => { setPayWithVisa(false) }}>
                <div className="flex flex-row gap-3.5">
                  <Image src={bank} width={21} height={20} alt="visa-method" /> <Typography.Text className='text-black text-sm font-normal'>Chuyển khoản ngân hàng</Typography.Text>
                </div>
                {!payWithVisa ? (<Check size={16} />) : (null)}

              </div>
            </div>
          </div>
          {!payWithVisa ? (
            <div className='pt-8'>
              <BankInfo />
            </div>
          ) :
            (
              <div className='flex flex-col gap-5 pt-5 pl-2 pr-2 pb-8 h-full'>
                <div className='font-bold text-xs text-gray-400 uppercase'>
                  Chọn số tiền quyên góp
                </div>
                <Rates />
              </div>
            )
          }
        </div>
      </SimpleGrid>
      {payWithVisa ? (
        <Footer className='bottom-0'>
          <SimpleGrid span={12}>
            <Button
              fullWidth
              className=" bg-amber-400 w-full"
              onClick={fail}
            ><Text size={"sm"} color="black">Tiến hành thanh toán</Text></Button>
          </SimpleGrid>
        </Footer>
      ) : (
        null
      )}
    </>
  )
}


export default Payment