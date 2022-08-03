import React from 'react';
import AppCard from '../components/AppCard';
import Card from '../components/Card';

const OTPHistory = () => {
    return (
        <Card title="Purchased codes" titleTagColor="#cabdff" backgroundColor="#fcfcfc">
            <div className="overflow-x-auto">
                <table>
                    <thead className="text-sm font-semibold text-[#6f767e]">
                        <tr>
                            <th className="p-4 text-center whitespace-nowrap">#</th>
                            <th className="p-4 text-left whitespace-nowrap">App</th>
                            <th className="p-4 text-center whitespace-nowrap">Status</th>
                            <th className="p-4 text-center whitespace-nowrap">Phone number</th>
                            <th className="p-4 text-center whitespace-nowrap">Code</th>
                            <th className="p-4 text-left whitespace-nowrap">SMS</th>
                            <th className="p-4 text-center whitespace-nowrap">Cost</th>
                            <th className="p-4 text-left whitespace-nowrap">Time</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-[#1a1d1f]">
                        <tr>
                            <td className="border-b border-[#efefef] p-4 text-center">1</td>
                            <td className="border-b border-[#efefef] p-4 text-left">
                                <AppCard image="//via.placeholder.com/40x40.png" name="Tinder" className='bg-transparent'/>
                            </td>
                            <td className="border-b border-[#efefef] p-4 text-center">
                                <span className="font-semibold text-[#83bf6e] px-2 py-1 bg-[#eafae4] rounded">Active</span>
                            </td>
                            <td className="border-b border-[#efefef] p-4 text-center">098779736</td>
                            <td className="border-b border-[#efefef] p-4 text-center">8884642</td>
                            <td className="border-b border-[#efefef] p-4 text-left">vLorem Ipsum is simply dummy text of the printing and typesetting</td>
                            <td className="border-b border-[#efefef] p-4 text-center">1.1</td>
                            <td className="border-b border-[#efefef] p-4 text-left">2022-06-29 09:29:55</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#efefef] p-4 text-center">1</td>
                            <td className="border-b border-[#efefef] p-4 text-left">
                                <AppCard image="//via.placeholder.com/40x40.png" name="Tinder" className='bg-transparent'/>
                            </td>
                            <td className="border-b border-[#efefef] p-4 text-center">
                                <span className="font-semibold text-[#83bf6e] px-2 py-1 bg-[#eafae4] rounded">Active</span>
                            </td>
                            <td className="border-b border-[#efefef] p-4 text-center">098779736</td>
                            <td className="border-b border-[#efefef] p-4 text-center">8884642</td>
                            <td className="border-b border-[#efefef] p-4 text-left">
                                <audio controls>
                                  <source src="horse.ogg" type="audio/ogg" />
                                  <source src="horse.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </td>
                            <td className="border-b border-[#efefef] p-4 text-center">1.1</td>
                            <td className="border-b border-[#efefef] p-4 text-left">2022-06-29 09:29:55</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Card>
    )
};
export default OTPHistory;