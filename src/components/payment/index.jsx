import React from 'react'
import { Button, Col, Row, Space, Typography, Modal } from 'antd';
import visa from '../../../public/visa.svg'
import Image from 'next/image';
import bank from '../../../public/visa-2.svg'
import { Check, CheckCircle } from "phosphor-react";
import Rates from './rates';
import { Footer } from 'antd/lib/layout/layout';
import BankInfo from './bank-info';
const Payment = () => {
  const [donation, setDonation] = React.useState(false)
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
      <Row>
        <Col span={24} >
          <div className="payment-container">
            <div className='payment-tiltle'> <Typography.Title level={3}>Ủng hộ chống dịch covid 19</Typography.Title></div>
            <div className='payment-method'>
              <div className='payment-method-title'>
                <Typography.Title level={5}>Chọn hình thức quyên góp</Typography.Title>
              </div>
              <div className='payment-method-content'>
                <div className='method-visa'>
                  <Image src={visa} width={30} height={24} alt="visa-method" /> <Typography.Text>Visa</Typography.Text>
                </div>
                <div className='method-banking'>
                  <div className="banking">
                    <Image src={bank} width={24} height={24} alt="visa-method" /> <Typography.Text>Chuyển khoản ngân hàng</Typography.Text>
                  </div>
                  <Check size={32} />
                </div>
              </div>
            </div>
            {donation ? (
              <div className='bank-info'>
                <div className="bank-detail">
                  <BankInfo />
                </div>
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
        </Col>
      </Row>
      <Footer>
        <Button size="large" block className="btn-process"
          onClick={success}
        >Tiến hành thanh toán</Button>
      </Footer>
    </>
  )
}

export default Payment