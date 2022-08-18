import React from 'react'
import Accordion from '../components/Accordion'
import Button from '../components/Button'
import Card from '../components/Card'
import CopyToClipboard from '../components/CopyToClipboard'
import SVGIcon from '../components/SVGIcon'

const APIDocument = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
      <div className='col-span-1 lg:col-span-2'>
        <Card title='API Integration' cardStyle='b5e4ca'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center'>
            <div className='flex items-center'>
              <div className='mr-3'>
                <SVGIcon name='code' w={64} h={64} />
              </div>
              <div>
                <div className='text-sm font-semibold text-[#6f767e] mb-2'>You API Key</div>
                <div className='text-sm font-semibold text-[#1a1d1f]'>9fd4b9ccdf38dc5a</div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-2 items-center'>
              <CopyToClipboard>
                {({ copy, setReferenceElement }) => (
                  <div className='block' ref={setReferenceElement}>
                    <Button
                      onClick={() => copy('9fd4b9ccdf38dc5a')}
                      className='w-full'
                      buttonStyle='primary'
                    >
                      Copy
                    </Button>
                  </div>
                )}
              </CopyToClipboard>
              <Button className='w-full'>Renew</Button>
            </div>
          </div>
        </Card>
        <Card title='Guide to use' cardStyle='b1e5fc'>
          <Accordion title='1. Get account infomation' active={true}>
            <div className='mb-4'>
              <div className='text-lg font-semibold text-[#1d1e1f] mb-2'>1.1 Request example</div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>
                GET https://chothuesimcode.com/api?act=account&amp;apik=9fd4b9ccdf38dc5a
              </div>
              <div className='text-sm font-medium text-[#6f767e] mb-4'>Request parameters</div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>act</div>
              <div className='text-sm font-medium text-[#6f767e] mb-4'>
                Request action
                <br /> - In this case : act=account
              </div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>apik</div>
              <div className='text-sm font-medium text-[#6f767e] mb-4'>
                Your api key
                <br /> - Identify your account
              </div>
            </div>
            <div className='mb-4'>
              <div className='text-lg font-semibold text-[#1d1e1f] mb-2'>
                1.2 Response data struct
              </div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>ResponseCode</div>
              <div className='text-sm font-medium text-[#6f767e] mb-4'>
                Your api key
                <br /> - Identify your account
              </div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>Msg</div>
              <div className='text-sm font-medium text-[#6f767e] mb-4'>
                Message
                <br /> - Success or error message
              </div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>Result</div>
              <div className='text-sm font-medium text-[#6f767e] mb-4'>Account infomation</div>
            </div>
            <div>
              <div className='text-lg font-semibold text-[#1d1e1f] mb-2'>1.3 Response example</div>
              <div className='text-sm font-semibold text-[#1d1e1f] mb-2'>
                GET https://chothuesimcode.com/api?act=account&apik=9fd4b9ccdf38dc5a
              </div>
            </div>
          </Accordion>
          <Accordion title='2. Check running application'>31231</Accordion>
          <Accordion title='3. Select a number to get code'>13123</Accordion>
          <Accordion title='4. Get code of existing number'>12312</Accordion>
        </Card>
      </div>
      <div className='col-span-1'>
        <Card title='Note' cardStyle='note'>
          <div>
            <ul className='list-disc text-sm font-medium text-[#1a1d1f] pl-4'>
              <li className='mb-2'>
                <p>Use GET protocol for every query</p>
              </li>
              <li className='mb-2'>
                <p>Data returned as JSON</p>
              </li>
              <li>
                <p>Phone numbers consist of only 9 digits, no leading zeros</p>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}
export default APIDocument
