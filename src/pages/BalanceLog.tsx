import React, { useState } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import InputDateRangePicker from '../components/InputDateRangePicker'
import Pagination from '../components/Pagination'
import SearchInput from '../components/SearchInput'
import SelectDropdown from '../components/SelectDropdown'
import Table, { ColumnType, RowType } from '../components/Table'
import { useTranslation } from 'react-i18next'

const BalanceLog: React.FC = () => {
  const { t } = useTranslation()
  const columns: ColumnType[] = [
    {
      label: t('#'),
      accessor: 'stt',
      className: 'min-w-[60px]',
      align: 'left',
    },
    {
      label: t('Transaction type'),
      accessor: 'transactionType',
      className: 'min-w-[200px]',
      align: 'center',
    },
    {
      label: t('Substance'),
      accessor: 'substance',
      className: 'min-w-[250px]',
      align: 'center',
    },
    {
      label: t('Price'),
      accessor: 'price',
      className: 'min-w-[100px]',
      align: 'center',
    },
    {
      label: t('Volatility'),
      accessor: 'volatility',
      className: 'min-w-[200px]',
      align: 'center',
    },
    {
      label: t('Date'),
      accessor: 'date',
      className: 'min-w-[200px]',
      align: 'right',
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
      label: t('All status'),
    },
    {
      value: 'active',
      label: t('Active'),
    },
    {
      value: 'disabled',
      label: t('Disabled'),
    },
    {
      value: 'inprocess',
      label: t('Inprocess'),
    },
  ]
  const [status1, setStatus1] = useState<unknown>('')
  return (
    <Card title={t('Log')}>
      <div className='grid grid-cols-6 items-center gap-2 overflow-x-auto'>
        <div className='col-span-6 lg:col-span-3'>
          <SearchInput placeholder={t('Search products')} />
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
            {t('Search')}
          </Button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table columns={columns} data={data} />
      </div>
      <Pagination
        perPageOptions={[
          {
            name: '10/' + t('Page'),
            value: 10,
          },
          {
            name: '20/' + t('Page'),
            value: 20,
          },
        ]}
        total={40}
      />
    </Card>
  )
}
export default BalanceLog
