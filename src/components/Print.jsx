import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Cv from './Cv.jsx'

export default function Print() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    return (
        <div>
          <Cv ref={componentRef} />
          <button onClick={handlePrint}>Print this out!</button>
        </div>
    );
}