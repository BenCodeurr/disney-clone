import logo from '../assets/images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
 } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from 'react-icons/hi';
import HeaderItems from './HeaderItems'
import { useState } from 'react';

export default function Header() {

    const [toggle, setToggle] = useState(false)

    const menu = [
        {
            id:1,
            name: 'HOME',
            icon: HiHome
        },
        {
            id: 2,
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            id: 3,
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            id: 4,
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            id: 5,
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            id: 6,
            name: 'SERIES',
            icon: HiTv
        }

    ]
  return (
    <div className='flex items-center p-5 gap-36 md:gap-80 justify-between'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover' />
            <div className='hidden md:flex gap-8'>
                {menu.map((item) =>(
                    <HeaderItems key={item.id} name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item, index) =>index<3&&(
                    <HeaderItems key={item.id} name={''} Icon={item.icon}/>
                ))}
                <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItems name={''} Icon={HiDotsVertical}/>
                   {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-600 p-3 px-5 py-4'>
                    {menu.map((item, index) =>index>2&&(
                        <HeaderItems key={item.id} name={item.name} Icon={item.icon}/>
                    ))}
                    </div>:null}
                </div>
            </div>
        </div>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className="w-[40px] rounded-full" alt="" />
    </div>
  )
}