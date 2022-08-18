import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import InputDateRangePicker from '../components/InputDateRangePicker'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import SelectDropdown from '../components/SelectDropdown'
import Table, { ColumnType, RowType } from '../components/Table'

const BalanceLog: React.FC = () => {
  const columns: ColumnType[] = [
    {
      label: '#',
      accessor: 'stt',
      className: 'min-w-[60px]',
    },
    {
      label: 'Transaction type',
      accessor: 'transactionType',
      className: 'min-w-[200px]',
    },
    {
      label: 'Substance',
      accessor: 'substance',
      className: 'min-w-[250px]',
    },
    {
      label: 'Price',
      accessor: 'price',
      className: 'min-w-[100px]',
    },
    {
      label: 'Volatility',
      accessor: 'volatility',
      className: 'min-w-[200px]',
    },
    {
      label: 'Date',
      accessor: 'date',
      className: 'min-w-[200px]',
    },
  ]
  const data: RowType[] = [
    {
      stt: '1',
      transactionType: 'RefundBuyCode',
      substance: 'Refund Yahoo/582066254/303989413',
      price: '0.7',
      volatility: '1670.41 -> 1671.11',
      date: '2022-06-29 09:29:55',
    },
    {
      stt: '1',
      transactionType: 'RefundBuyCode',
      substance: 'Refund Yahoo/582066254/303989413',
      price: '0.7',
      volatility: '1670.41 -> 1671.11',
      date: '2022-06-29 09:29:55',
    },
    {
      stt: '1',
      transactionType: 'RefundBuyCode',
      substance: 'Refund Yahoo/582066254/303989413',
      price: '0.7',
      volatility: '1670.41 -> 1671.11',
      date: '2022-06-29 09:29:55',
    },
  ]
  const selectOption = [
    {
      value: '',
      label: 'All status',
    },
    {
      value: 'active',
      label: 'Active',
    },
    {
      value: 'disabled',
      label: 'Disabled',
    },
    {
      value: 'inprocess',
      label: 'Inprocess',
    },
  ]
  const [status1, setStatus1] = useState<unknown>('')
  return (
    <Card title='Log'>
      <div className='grid grid-cols-6 items-center gap-2 overflow-x-auto'>
        <div className='col-span-6 lg:col-span-3'>
          <SearchInput />
        </div>
        <div className='col-span-6 lg:col-span-1'>
          <SelectDropdown
            options={selectOption}
            onChange={(value) => setStatus1(value)}
            value={status1}
          />
        </div>
        <div className='col-span-6 lg:col-span-1'>
          <InputDateRangePicker className='w-full' />
        </div>
        <div className='col-span-6 lg:col-span-1'>
          <Button buttonStyle='primary' className='w-full'>
            Search
          </Button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table columns={columns} data={data} />
      </div>
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
  )
}
export default BalanceLog
