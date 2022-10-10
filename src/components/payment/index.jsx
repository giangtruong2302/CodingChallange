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
        <div className="payment-container">
          <div className='payment-tiltle'> <Typography.Title level={3}>Ủng hộ chống dịch Covid 19</Typography.Title></div>
          <div className='payment-method'>
            <div className='payment-method-title'>
              <Typography.Title level={5}>Chọn hình thức quyên góp</Typography.Title>
            </div>
            <div className='payment-method-content' >
              <div className='method-visa' onClick={() => { setPayWithVisa(true) }}>
                <div className="banking">
                  <Image src={visa} width={34} height={24} alt="visa-method" /> <Typography.Text>Visa</Typography.Text>
                </div>
                {payWithVisa ? (<Check size={28} />) : (null)}
              </div>

              <div className='method-banking' onClick={() => { setPayWithVisa(false) }}>
                <div className="banking">
                  <Image src={bank} width={34} height={34} alt="visa-method" /> <Typography.Text>Chuyển khoản ngân hàng</Typography.Text>
                </div>
                {!payWithVisa ? (<Check size={28} />) : (null)}

              </div>
            </div>
          </div>
          {!payWithVisa ? (
            <div className='bank-detail'>
              <BankInfo />
            </div>
          ) :
            (
              <div className='bank-info'>
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
            className="btn-pay"
            onClick={success}
          ><Text size={"sm"} color="black">Tiến hành thanh toán</Text></Button>
        </SimpleGrid>
      </Footer>
    </>
  )
}


export default Payment