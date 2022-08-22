import React from 'react'
import Card from '../components/Card'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Pagination from '../components/Pagination'
import HomeDetailTableRow from '../components/HomeDetailTableRow'
import SVGIcon from '../components/SVGIcon'
import { useTranslation } from 'react-i18next'

ChartJS.register(ArcElement, Tooltip)

const Home = () => {
  const { t } = useTranslation()
  const dataChart = {
    labels: ['Facebook', 'Tinder', 'Tinder', 'Tinder', 'Tinder', 'Microsoft/hotmail/outlook'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(24, 144, 255, 1)',
          'rgba(19, 194, 194, 1)',
          'rgba(82, 196, 26, 1)',
          'rgba(250, 219, 20, 1)',
          'rgba(255, 77, 79, 1)',
          'rgba(114, 46, 209, 1)',
        ],
        borderColor: [
          'rgba(24, 144, 255, 1)',
          'rgba(19, 194, 194, 1)',
          'rgba(82, 196, 26, 1)',
          'rgba(250, 219, 20, 1)',
          'rgba(255, 77, 79, 1)',
          'rgba(114, 46, 209, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
      <div className='col-span-1'>
        <Card title={t('Account Information')} cardStyle='cabdff'>
          <div className='mb-6'>
            <div className='text-sm font-semibold text-[#6f767e] mb-2'>{t('Full name')}</div>
            <div className='text-sm font-semibold text-[#1a1d1f]'>VO THI PHUONG</div>
          </div>
          <div className='mb-6'>
            <div className='text-sm font-semibold text-[#6f767e] mb-2'>{t('Phone number')}</div>
            <div className='text-sm font-semibold text-[#1a1d1f]'>0399900661</div>
          </div>
          <div className='mb-6'>
            <div className='text-sm font-semibold text-[#6f767e] mb-2'>{t('Balance')}</div>
            <div className='text-sm font-semibold text-[#1a1d1f]'>1,673.51 đ</div>
          </div>
        </Card>
      </div>
      <div className='col-span-1 lg:col-span-2'>
        <Card title='OTP' cardStyle='ffbc99'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='col-span-1 flex items-center justify-center'>
              <Doughnut data={dataChart} className='max-w-[250px]' />
            </div>
            <div className='col-span-1 overflow-x-auto'>
              <table className='text-sm font-medium text-[#1a1d1f] w-full'>
                <tbody>
                  <tr>
                    <td className='font-semibold text-left px-1 py-2'>
                      <div className='flex items-center'>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#1890ff] mr-2'></span>
                        Facebook
                      </div>
                    </td>
                    <td className='text-right text-[#6f767e] px-1 py-2'>28.79%</td>
                    <td className='text-right px-1 py-2'>1,000</td>
                  </tr>
                  <tr>
                    <td className='font-semibold text-left px-1 py-2'>
                      <div className='flex items-center'>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#13c2c2] mr-2'></span>
                        Tinder
                      </div>
                    </td>
                    <td className='text-right text-[#6f767e] px-1 py-2'>28.79%</td>
                    <td className='text-right px-1 py-2'>1,000</td>
                  </tr>
                  <tr>
                    <td className='font-semibold text-left px-1 py-2'>
                      <div className='flex items-center'>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#52c41a] mr-2'></span>
                        Tinder
                      </div>
                    </td>
                    <td className='text-right text-[#6f767e] px-1 py-2'>28.79%</td>
                    <td className='text-right px-1 py-2'>1,000</td>
                  </tr>
                  <tr>
                    <td className='font-semibold text-left px-1 py-2'>
                      <div className='flex items-center'>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#fadb14] mr-2'></span>
                        Tinder
                      </div>
                    </td>
                    <td className='text-right text-[#6f767e] px-1 py-2'>28.79%</td>
                    <td className='text-right px-1 py-2'>1,000</td>
                  </tr>
                  <tr>
                    <td className='font-semibold text-left px-1 py-2'>
                      <div className='flex items-center'>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#ff4d4f] mr-2'></span>
                        Tinder
                      </div>
                    </td>
                    <td className='text-right text-[#6f767e] px-1 py-2'>28.79%</td>
                    <td className='text-right px-1 py-2'>1,000</td>
                  </tr>
                  <tr>
                    <td className='font-semibold text-left px-1 py-2'>
                      <div className='flex items-center'>
                        <span className='w-[8px] h-[8px] rounded-full bg-[#722ed1] mr-2'></span>
                        Microsoft/hotmail/outlook
                      </div>
                    </td>
                    <td className='text-right text-[#6f767e] px-1 py-2'>28.79%</td>
                    <td className='text-right px-1 py-2'>1,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Card>
        <Card title={t('Detail')} cardStyle='ffbc99'>
          <div className='flex md:hidden items-center bg-[#efefef] rounded-xl p-3 h-[48px] mb-5'>
            <div className='text-sm font-semibold text-[#6f767e]'>Sort by:</div>
            <select className='grow text-sm font-semibold text-[#1a1d1f] bg-transparent focus-visible:outline-none'>
              <option value='0'>None</option>
            </select>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='hidden md:table-header-group'>
                <tr>
                  <th className='text-sm font-semibold text-[#6f767e] border-b border-[#efefef] hidden md:table-cell text-left px-5 py-4'>
                    #
                  </th>
                  <th className='text-sm font-semibold text-[#6f767e] border-b border-[#efefef] text-left px-5 py-4'>
                    {t('App')}
                  </th>
                  <th className='text-sm font-semibold text-[#6f767e] border-b border-[#efefef] hidden md:table-cell text-center px-5 py-4'>
                    {t('Done')}
                  </th>
                  <th className='text-sm font-semibold text-[#6f767e] border-b border-[#efefef] hidden md:table-cell text-right px-5 py-4'>
                    {t('Expired')}
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm font-normal text-[#1a1d1f]'>
                <HomeDetailTableRow />
                <HomeDetailTableRow />
                <HomeDetailTableRow />
                <HomeDetailTableRow />
              </tbody>
            </table>
          </div>
          <div className='hidden md:flex'>
            <Pagination
              perPageOptions={[
                {
                  name: '10/' + t('Page'),
                  value: 10,
                },
                {
                  name: '20' + t('Page'),
                  value: 20,
                },
              ]}
              total={40}
            />
          </div>
          <div className='flex md:hidden items-center justify-center mt-5'>
            <button className='text-sm font-bold text-[#1a1d1f] inline-flex items-center border border-[#efefef] rounded-xl px-5 py-3'>
              <SVGIcon name='loadmore' w={24} h={24} className='mr-2' />
              <span>Load more</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
export default Home
