import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className=" pt-2 footer-container mt-5">

                <div className="row w-75 p-3 mx-auto footer-detaill">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-5 col-12 col-sm-12">
                        <h3 className="">RK-MEDICAL HOSPITAL</h3>
                        <p><small className="visits"> Candidates must apply for admission in a prescribed application form. Application forms for admission into this medical college can be collected during office hours (8:00 am to 1.00 pm). A filled-up application should be submitted along with relevant mentioned documents and the cost of form Tk..</small></p>

                    </div>
                    <div className="  p-3 col-lg-3 col-md-3 col-12 col-sm-12">
                        <h3>CONTACT US</h3>
                        <h5>RK-MEDICAL HOSPITAL</h5>
                        <p>House- 14 & 37 , Road-5, Block-D, DHANMONDI, Dhaka-1200</p>
                        <p>Hotline : 01715868941, 0185768945, </p>
                    </div>

                    <div className=" p-3 col-lg-4 col-md-4 col-12 col-sm-12">
                        <h3>IF ANY QUERY</h3>
                        <p>Email: info@rkmedical.com</p>
                        <p>Support: 01758694854</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;