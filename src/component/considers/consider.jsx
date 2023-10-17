import './consider.css';
import cons1 from '../../assets/considers/Flynext logo.png'
import cons2 from '../../assets/considers/FSN_Logo logo.png'
import cons3 from '../../assets/considers/DRSC-Logo logo.png'
import cons4 from '../../assets/considers/ISTI_logo logo.png'
import cons5 from '../../assets/considers/lkdto logo.png'
// import obgImg from '../../assets/OBJECTS.png';
// import obgImg2 from '../../assets/OBJECTS2.png';
function Consider() {
    return (<div className="consider p-4 ">
            <div className="container bg-white justify-content-center ">
                <div className="row  p-3 justify-content-center align-content-center d-flex gap-3">
                    <div className="col-sm col-md">
                        <img src={cons1} className='img-fluid' alt='flyNext-Logo' />
                    </div>
                    <div className="col-sm col-md">
                        <img src={cons2} className='img-fluid' alt='FSN-Logo' />
                    </div>
                    <div className="col-sm col-md">
                        <img src={cons3} className='img-fluid' alt='DRSC-Logo' />
                    </div>
                    <div className="col-sm col-md">
                        <img src={cons4} className='img-fluid' alt='DRSC-Logo' />
                    </div>
                    <div className="col-sm col-md">
                        <img src={cons5} className='img-fluid' alt='IKDTO-Logo' />
                    </div>
                </div>
            </div>
        </div>);
}

export default Consider;