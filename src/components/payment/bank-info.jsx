import React, { useState, useEffect } from 'react'
import { CopyButton, Button, Text, ThemeIcon } from '@mantine/core'
import { showNotification } from "@mantine/notifications"
import { IconCheck } from '@tabler/icons'
import axios from "axios"
import fetch from "isomorphic-unfetch";

const BankInfo = () => {
  const [accountNumber, setAccountNumber] = useState("191415477")
  const [bankInfo, setBankInfo] = useState()

  const callAPI = async () => {
    try {

      await axios.get('https://be-homework.vercel.app/api/bank', {

      }).then((res) => { setBankInfo(res.data) }).catch(() => {
        alert("error")
      })

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callAPI()
  }, [])
  console.log("bank info: ", bankInfo)
  return (
    <div className="flex flex-col bg-white gap-3 pt-5 pl-3 pr-5">
      <div className=" text-slate-400 text-sm">Chi nhánh ngân hàng</div>
      <div className="text-sm">{bankInfo?.bank ?? "N/A"}</div>
      <div className="flex flex-row justify-between">
        <div>
          <div className=" text-slate-400 text-sm">Số tài khoản</div>
          <div className="tai-khoan-content">{bankInfo?.account ?? "N/A"}</div>
        </div>
        <div >
          <CopyButton value={accountNumber}>
            {({ copied, copy }) => (
              <Button
                className=' bg-gray-200 hover:bg-green-300'
                onClick={async () => {
                  showNotification({
                    icon: <IconCheck size={16} />,
                    message: 'Đã copy số tài khoản',
                    color: "green",
                    radius: "md",
                    styles: (theme) => ({
                      closeButton: {
                        color: theme.black
                      },
                      root: {
                        backgroundColor: theme.colors.green[2],
                        borderColor: theme.colors.green[2],

                        '&::before': { backgroundColor: theme.white },
                      },

                      title: { color: theme.white },
                      description: { color: theme.black },
                      closeButton: {
                        color: theme.black,
                        '&:hover': { backgroundColor: theme.colors.green[6] },
                      },
                    }),
                  });
                  copy();
                }
                }
              ><Text color="black" >{copied ? <div className="flex flex-row"><IconCheck />{"Copied STK"}</div> : 'Copy STK'}</Text></Button>
            )}
          </CopyButton>
        </div>
      </div>
      <div>
        <div>
          <div className=" text-slate-400 text-sm">Tên tài khoản</div>
          <div>{bankInfo?.name ?? "N/A"}</div>
        </div>
      </div>
      <div>
        <div className=" text-slate-400 text-sm">Nội dung chuyển tiền</div>
        <div>{bankInfo?.content ?? "N/A"}</div>
      </div>
    </div>
  )
}

export default BankInfo