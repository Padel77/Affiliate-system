import React from 'react';
import Adverst1 from '../../../assets/homeAffilate/adverst1.png';
import Adverst2 from '../../../assets/homeAffilate/adverst2.png';


function Advertising(props) {

    return (
        <div className='text-bg-primary focus-ring-primary p-md-3'>
            <div className='container d-flex justify-content-between'>

                    <div className='d-flex w-50  justify-content-between'>
                        <img className='img-fluid w-25' src={Adverst2} alt=' SaleImg'/>
                        <h3 className='p-3 '>
                            عروض وخصومات غير محدودة
                        </h3>
                    </div>

                <div >
                    <img src={Adverst1} alt='percentigImg'/>
                </div>
            </div>
        </div>
    );
}

export default Advertising;