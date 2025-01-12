import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions } from '@/constants/options';
import { SelectTravellersList } from '@/constants/options';
import { Button } from '@/components/ui/button';

function CreateTrip() {
  const [place, setPlace]  = useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your Travel Preferences</h2>
        <p className='mt-3 text-gray-500 text-xl'>Just provide us some information on this with your Destination and budget preferences</p>
        <div className='mt-20 flex flex-col gap-9'>
            <div>
                <h2 className='text-xl my-3 font-medium'>What is your Destination of your Choice?</h2>
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{
                        place,
                        onChange: (v)=>{setPlace(v); console.log(v)}
                    }}
                />
            </div>

            <div className='mt-10'>
                <h2 className='text-xl my-3 font-medium'>Select number of Days :</h2>
                <Input type="number" Placeholder={'Ex.3'}/>
            </div>

            <div>
                <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                   {SelectBudgetOptions.map((item,index)=>(
                    <div key={index} className=' p-4 cursor-pointer border rounded-lg hover:shadow-lg'>
                        <h2 className='text-4xl'>{item.icon}</h2>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-gray-500'>{item.desc}</h2>
                    </div>
                   ))}
                </div>
            </div>

            <div>
                <h2 className='text-xl my-4 font-medium'>Who's your Companion on your Trip?</h2>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                   {SelectTravellersList.map((item,index)=>(
                    <div key={index} className=' p-4 cursor-pointer border rounded-lg hover:shadow-lg'>
                        <h2 className='text-4xl'>{item.icon}</h2>
                        <h2 className='font-bold text-lg'>{item.title}</h2>
                        <h2 className='text-gray-500'>{item.desc}</h2>
                    </div>
                   ))}
                </div>
            </div>

        </div>
        <div className='my-3 justify-end flex'>
           <Button>Generate Trip</Button>
        </div>
        
    </div>
  )
}

export default CreateTrip 