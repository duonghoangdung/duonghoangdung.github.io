import Card from '../components/Card'
import CopyToClipboard from '../components/CopyToClipboard'
import Pagination from '../components/Pagination'
import { useTranslation } from 'react-i18next'

const Addfund = () => {
  const { t } = useTranslation()
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
      <div className='col-span-1 lg:col-span-2'>
        <Card title={t('Addfund infomation')} cardStyle='b5e4ca'>
          <div className='bg-[#f4f4f4] p-6 rounded-lg mb-6 text-sm font-semibold'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <div className='text-[#6f767e] mb-2'>{t('Bank')}</div>
                <div className='text-[#1a1d1f]'>Vietcombank</div>
              </div>
              <div>
                <div className='text-[#6f767e] mb-2'>{t('Account number')}</div>
                <div className='text-[#1a1d1f]'>
                  1019556601
                  <CopyToClipboard>
                    {({ copy, setReferenceElement }) => (
                      <div ref={setReferenceElement} className='inline-block'>
                        <button
                          onClick={() => copy('1019556601')}
                          className='text-[#2a85ff] hover:opacity-75 transition-opacity ml-2'
                        >
                          {t('Copy')}
                        </button>
                      </div>
                    )}
                  </CopyToClipboard>
                </div>
              </div>
              <div>
                <div className='text-[#6f767e] mb-2'>{t('Account owner&apos;s name')}</div>
                <div className='text-[#1a1d1f]'>
                  HA TRI TAM
                  <CopyToClipboard>
                    {({ copy, setReferenceElement }) => (
                      <div ref={setReferenceElement} className='inline-block'>
                        <button
                          onClick={() => copy('HA TRI TAM')}
                          className='text-[#2a85ff] hover:opacity-75 transition-opacity ml-2'
                        >
                          {t('Copy')}
                        </button>
                      </div>
                    )}
                  </CopyToClipboard>
                </div>
              </div>
              <div>
                <div className='text-[#6f767e] mb-2'>{t('Transaction content')}</div>
                <div className='text-[#1a1d1f]'>
                  CTSC 0399900661
                  <CopyToClipboard>
                    {({ copy, setReferenceElement }) => (
                      <div ref={setReferenceElement} className='inline-block'>
                        <button
                          onClick={() => copy('1019556601')}
                          className='text-[#2a85ff] hover:opacity-75 transition-opacity ml-2'
                        >
                          {t('Copy')}
                        </button>
                      </div>
                    )}
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>

          <div className='text-lg font-semibold text-[#ff6a55] mb-2'>L??u ??</div>
          <ul className='list-disc text-sm leading-6 font-normal text-[#1a1d1f] pl-4 mb-4'>
            <li>N???i dung CK : CTSC+&lt;kho???ng c??ch&gt;+sdt</li>
            <li>
              Khi chuy???n kho???n qu?? kh??ch vui l??ng ghi ????ng n???i dung ck m?? web cung c???p ????? auto n???p
              s??? d??.
            </li>
            <li>
              N???u qu?? kh??ch ghi nh???m n???i dung ck vui l??ng ch???p ???nh bill chi ti???t g???i v??o zalo h??? tr???
              k??m theo n???i dung ck ????ng.
            </li>
            <li>S??? ti???n n???p t???i thi???u l?? 30,000</li>
          </ul>
          <p className='text-sm font-semibold text-[#111315]'>
            *H??? th???ng kh??ng ch???u tr??ch nhi???m n???u n???i dung n???p kh??ng ????ng CTSC 0399900661
          </p>
        </Card>
        <Card title={t('Addfund List')} cardStyle='ffbc99'>
          <table className='table-auto w-full'>
            <thead>
              <tr>
                <th className='text-sm font-semibold text-[#6f767e] p-4 text-center'>#</th>
                <th className='text-sm font-semibold text-[#6f767e] p-4 text-center'>Amount</th>
                <th className='text-sm font-semibold text-[#6f767e] p-4 text-center'>Content</th>
                <th className='text-sm font-semibold text-[#6f767e] p-4 text-right'>Time</th>
              </tr>
            </thead>
            <tbody className='text-sm font-normal text-[#1a1d1f]'>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
              <tr>
                <td className='border-b border-[#efefef] p-4 text-center'>1</td>
                <td className='border-b border-[#efefef] p-4 text-center'>100.000</td>
                <td className='border-b border-[#efefef] p-4 text-center'>CTSC 083721389</td>
                <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
              </tr>
            </tbody>
          </table>
          <Pagination
            perPageOptions={[
              {
                name: '10/page',
                value: 10,
              },
              {
                name: '20/page',
                value: 20,
              },
            ]}
            total={40}
          />
        </Card>
      </div>
      <div className='col-span-1'>
        <Card title={t('Note')} cardStyle='note'>
          <div>
            <ul className='list-disc text-sm font-medium text-[#1a1d1f] pl-4'>
              <li className='mb-2'>
                <p>
                  If you enter correct deposit information, your account will be automatically added
                  after the transaction is successful.
                </p>
              </li>
              <li>
                <p>Minimum deposit amount is 30,000 VND</p>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}
export default Addfund
