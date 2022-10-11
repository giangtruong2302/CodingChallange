import React from 'react'
import { Typography, Modal } from 'antd';
import visa from '../../../public/visa.svg'
import { Button, SimpleGrid, Text, createStyles } from '@mantine/core'
import Image from 'next/image';
import bank from '../../../public/visa-2.svg'
import { Check, CheckCircle } from "phosphor-react";
import Rates from './rates';
import { Footer } from 'antd/lib/layout/layout';
import BankInfo from './bank-info';

const Payment = () => {
  const [donation, setDonation] = React.useState(false)
  const [payWithVisa, setPayWithVisa] = React.useState(true)
  const success = () => {
    setDonation(true)
    Modal.success({
      icon: (<CheckCircle weight="fill" size={56} color="#DFF6DE" />),
      centered: true,
      content: (
        <>
          <Typography.Title level={5}>Thanh toán thành công</Typography.Title>
          <Typography.Text>Xin chân thành cảm ơn sự ủng hộ của Quý khách</Typography.Text>
        </>
      ),
    });
  };
  const fail = () => {
    Modal.error({
      icon: (<CheckCircle weight="fill" size={56} color="#DFF6DE" />),
      centered: true,
      content: (
        <>
          <Typography.Title level={5}>Đã có lỗi thanh toán</Typography.Title>
          <Typography.Text>Thanh toán thất bại vui lòng thử lại</Typography.Text>
        </>
      ),
    });
  };
  return (
    <>
      <SimpleGrid span={12}>
        <div className="flex flex-col h-screen bg-slate-100">
          <div className='bg-white pt-5 pl-3 pb-0 pr-3 top-0 sticky z-10'> <Typography.Title level={3}>Ủng hộ chống dịch Covid 19</Typography.Title></div>
          <div className='flex flex-col'>
            <div className='p-2 font-bold text-black'>
              <Typography.Title level={5}>Chọn hình thức quyên góp</Typography.Title>
            </div>
            <div className='flex flex-col bg-white' >
              <div className='flex flex-row justify-between pl-3 pr-3 pt-2 pb-2  border-b-slate-100 border-b-2 border-b-solid h-max justify-items-center' onClick={() => { setPayWithVisa(true) }}>
                <div className="flex flex-row gap-3.5 ">
                  <Image src={visa} width={34} height={28} alt="visa-method" /> <Typography.Text >Visa</Typography.Text>
                </div>
                {payWithVisa ? (<Check size={28} />) : (null)}
              </div>

              <div className='flex flex-row justify-between  border-b-slate-100 border-b-2 border-b-solid pl-3 pr-3 pt-2 pb-2' onClick={() => { setPayWithVisa(false) }}>
                <div className="flex flex-row gap-3.5">
                  <Image src={bank} width={34} height={34} alt="visa-method" /> <Typography.Text>Chuyển khoản ngân hàng</Typography.Text>
                </div>
                {!payWithVisa ? (<Check size={28} />) : (null)}

              </div>
            </div>
          </div>
          {!payWithVisa ? (
            <div className='pt-8'>
              <BankInfo />
            </div>
          ) :
            (
              <div className='flex flex-col gap-5 pt-8 pl-3 pr-3 pb-8 h-full'>
                <div>
                  Chọn số tiền quyên góp
                </div>
                <Rates />
              </div>
            )
          }
        </div>
      </SimpleGrid>
      <Footer>
        <SimpleGrid span={12}>
          <Button
            className=" bg-amber-400 w-full"
            onClick={success}
          ><Text size={"sm"} color="black">Tiến hành thanh toán</Text></Button>
        </SimpleGrid>
      </Footer>
    </>
  )
}


export default Payment