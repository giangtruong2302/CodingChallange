import React, { useState } from 'react'
import visa from '../../../public/visa.svg'
import { Button, SimpleGrid, Text, createStyles, ThemeIcon, LoadingOverlay, Title } from '@mantine/core'
import Image from 'next/image';
import bank from '../../../public/visa-2.svg'
import { openContextModal } from '@mantine/modals'
import { Check, Warning } from "phosphor-react";
import Rates from './rates';
import BankInfo from './bank-info';
import axios from 'axios'

const Payment = () => {
  const [donation, setDonation] = React.useState(false)
  const [payWithVisa, setPayWithVisa] = React.useState(true)
  const [loading, setLoading] = useState(false)
  const [valueDonate, setValueDonate] = useState(0)
  const success = () => {
    setDonation(true)
    openContextModal({
      modal: 'demonstration',
      IconClose: false,
      centered: true,
      withCloseButton: false,
      title: (<ThemeIcon size={56} color={"#DFF6DE"} radius={"50%"}><Check weight="fill" size={24} color="#26AA53" /></ThemeIcon>),
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
      title: (<ThemeIcon size={56} color={"#FBE2E2"} radius={"50%"}><Warning weight="fill" size={25} color="#AD0000" /></ThemeIcon>),
      innerProps: {
        titleBody: "Đã có lỗi thanh toán",
        modalBody:
          'Thanh toán thất bại. Vui lòng thử lại',
      },
    })
  };
  const getValueDonate = (value) => {
    setValueDonate(value);
  }
  const donate = async () => {
    if (valueDonate === 0) return fail();
    try {
      setLoading(true)
      await axios.post('https://be-homework.vercel.app/api/card', {
        amount: valueDonate
      }).then((res) => { setLoading(false); success() }).catch(() => {
        setLoading(false);
        fail()
      })

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <SimpleGrid span={12}>
        <div className="flex flex-col h-screen bg-slate-50">
          <div className='bg-white pt-5 pl-4 pb-0 pr-4 top-0 sticky z-10'> <Title order={3}>Ủng hộ chống dịch Covid 19</Title></div>
          <div className='flex flex-col'>
            <div className='p-4 pt-5 font-bold text-gray-500 uppercase text-xs'>
              Chọn hình thức quyên góp
            </div>
            <div className='flex flex-col bg-white' >
              <button className='flex flex-row justify-between pl-4 pr-4 pt-4 pb-4  border-b-slate-100 border-b-2 border-b-solid h-max justify-items-center' onClick={() => { setPayWithVisa(true) }}>
                <div className="flex flex-row gap-3.5 ">
                  <Image src={visa} width={25} height={15} alt="visa-method" /> <Text className='text-black text-sm font-normal'>Visa...2725</Text>
                </div>
                {payWithVisa ? (<Check size={16} />) : (null)}
              </button>

              <button className='flex flex-row justify-between  border-b-slate-100 border-b-2 border-b-solid pl-4 pr-4 pt-4 pb-4' onClick={() => { setPayWithVisa(false) }}>
                <div className="flex flex-row gap-3.5">
                  <Image src={bank} width={21} height={20} alt="visa-method" /> <Text className='text-black text-sm font-normal'>Chuyển khoản ngân hàng</Text>
                </div>
                {!payWithVisa ? (<Check size={16} />) : (null)}

              </button>
            </div>
          </div>
          <LoadingOverlay visible={loading} overlayBlur={2} />
          {!payWithVisa ? (
            <div className='pt-8'>
              <BankInfo />
            </div>
          ) :
            (
              <div className='flex flex-col gap-5 pt-5 pl-4 pr-4 pb-8 h-full'>
                <div className='font-bold text-xs text-gray-400 uppercase'>
                  Chọn số tiền quyên góp
                </div>
                <Rates getValueDonate={getValueDonate} />
              </div>
            )
          }
        </div>
      </SimpleGrid>
      {payWithVisa ? (
        <div className='bottom-0 sticky pl-5 pr-5 pb-5'>
          <SimpleGrid span={12}>
            <Button
              fullWidth
              color={"yellow"}
              className=" bg-amber-400 "
              onClick={() => { donate() }}
            ><Text size={"sm"} color="black">Tiến hành thanh toán</Text></Button>
          </SimpleGrid>
        </div>
      ) : (
        null
      )}
    </>
  )
}


export default Payment