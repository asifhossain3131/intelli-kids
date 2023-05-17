import {React} from 'react';
import { BeatLoader } from 'react-spinners';
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    return (
        <div className='mx-auto flex items-center justify-center my-12'>
                <h1 className='text-[100px]'>L</h1><ClipLoader
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <span className='text-[100px]'>ADING</span>
      <BeatLoader className='mt-16'></BeatLoader>
        </div>
    );
};

export default Spinner;