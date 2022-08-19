import React from 'react'
import AppCard from '../components/AppCard'
import Card from '../components/Card'
import Pagination from '../components/Pagination'

const OTPHistory = () => {
  return (
    <Card title='Purchased codes'>
      <div className='overflow-x-auto'>
        <table>
          <thead>
            <tr>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-left whitespace-nowrap min-w-[50px]'>
                #
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-left whitespace-nowrap min-w-[200px]'>
                App
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-center whitespace-nowrap min-w-[100px]'>
                Status
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-center whitespace-nowrap min-w-[150px]'>
                Phone number
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-center whitespace-nowrap min-w-[100px]'>
                Code
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-left whitespace-nowrap min-w-[300px]'>
                SMS
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-center whitespace-nowrap min-w-[100px]'>
                Cost
              </th>
              <th className='text-sm font-semibold text-[#6f767e] p-4 text-right whitespace-nowrap min-w-[200px]'>
                Time
              </th>
            </tr>
          </thead>
          <tbody className='text-sm font-normal text-[#1a1d1f]'>
            <tr>
              <td className='border-b border-[#efefef] p-4 text-left'>1</td>
              <td className='border-b border-[#efefef] p-4 text-left'>
                <AppCard
                  image='//via.placeholder.com/40x40.png'
                  name='Tinder'
                  className='bg-transparent p-0'
                />
              </td>
              <td className='border-b border-[#efefef] p-4 text-center'>
                <span className='font-semibold text-[#83bf6e] px-2 py-1 bg-[#eafae4] rounded'>
                  Active
                </span>
              </td>
              <td className='border-b border-[#efefef] p-4 text-center'>098779736</td>
              <td className='border-b border-[#efefef] p-4 text-center'>8884642</td>
              <td className='border-b border-[#efefef] p-4 text-left'>
                vLorem Ipsum is simply dummy text of the printing and typesetting
              </td>
              <td className='border-b border-[#efefef] p-4 text-center'>1.1</td>
              <td className='border-b border-[#efefef] p-4 text-right'>2022-06-29 09:29:55</td>
            </tr>
            <tr>
              <td className='border-b border-[#efefef] p-4 text-left'>1</td>
              <td className='border-b border-[#efefef] p-4 text-left'>
                <AppCard
                  image='//via.placeholder.com/40x40.png'
                  name='Tinder'
                  className='bg-transparent p-0'
                />
              </td>
              <td className='border-b border-[#efefef] p-4 text-center'>
                <span className='font-semibold text-[#83bf6e] px-2 py-1 bg-[#eafae4] rounded'>
                  Active
                </span>
              </td>
              <td className='border-b border-[#efefef] p-4 text-center'>098779736</td>
              <td className='border-b border-[#efefef] p-4 text-center'>8884642</td>
              <td className='border-b border-[#efefef] p-4 text-left'>
                <audio controls>
                  <source src='horse.ogg' type='audio/ogg' />
                  <source src='horse.mp3' type='audio/mpeg' />
                  Your browser does not support the audio element.
                </audio>
              </td>
              <td className='border-b border-[#efefef] p-4 text-center'>1.1</td>
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
      </div>
    </Card>
  )
}
export default OTPHistory
