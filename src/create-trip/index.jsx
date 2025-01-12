import Input_ from 'postcss/lib/input';
import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from '@/components/ui/input';
import { SelectBudget } from '@/constants/options';

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
        </div>
    </div>
  )
}

export default CreateTrip 