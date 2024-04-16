import React from 'react'
import { FlameKindling ,SquareParking, Wifi, Tv} from 'lucide-react';

export default function Perks({selected,onChange}) {
  function handleCbClick(ev){
    const {checked,name} = ev.target

    if(checked){
        onChange([...selected,name])
    }else{
        onChange([...selected.filter(selectedName => selectedName != name)])
    }
  }
    return (
    <>
        <div className='flex gap-3 border p-4 rounded-lg min-w-70'>
            <input type="checkbox" name="wifi" className='w-4' onChange={handleCbClick}/>
            <span className='pr-6 flex items-center gap-1'>
                <Wifi size={20} strokeWidth={1.25} />
                Wifi
            </span>
        </div>
        <div className='flex gap-2 border p-4 rounded-lg'>
            <input type="checkbox" name="tv" className='w-4' onChange={handleCbClick}/>
            <span className='pr-6 flex items-center gap-1'>
                <Tv size={20} strokeWidth={1.25} />
                Tv
            </span>
        </div>
        <div className='flex gap-2 border p-4 rounded-lg'>
            <input type="checkbox" name="parking-spot" className='w-4' onChange={handleCbClick}/>
            <span className='pr-6 flex items-center gap-1'>
                <SquareParking size={20} strokeWidth={1.25} />
                Parking spot
            </span>
        </div>
        <div className='flex gap-2 border p-4 rounded-lg'>
            <input type="checkbox" name="heating" className='w-4' onChange={handleCbClick}/>
            <span className='pr-6 flex items-center gap-1'>
                <FlameKindling size={20} strokeWidth={1.25} />
                Heating
            </span>
        </div>
    </>
  )
}
