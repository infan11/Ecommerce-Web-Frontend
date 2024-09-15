import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  
const MensCard = () => {
    return (
        <div className=' mt-20 max-w-7xl  mx-auto grid md:grid-cols-3 justify-center items-center lg:ml-32 gap-3'>
            {/* Casual_Shirt */}
            <div>
            <Card className="mt-6 w-80 h-80">
      <CardHeader color="white" className="relative">
        <img
          src="https://i.ibb.co.com/MPyfLjc/image1.png"
          alt="card-image"
        />
  
      </CardHeader>
   
    <CardBody>
    <div className=' justify-center  items-center ml-14   '>
    <button className='btn bg-transparent rounded-full text-black font-bold border-2 border-yellow-600'>CASUAL SHIRTS</button>
    </div>
    </CardBody>
    </Card>
            </div>
            <div>
            <Card className="mt-6 w-80 h-80">
      <CardHeader color="white" className="relative">
        <img
          src="https://i.ibb.co.com/fY6Mj0M/image2.png"
          alt="card-image"
        />
  
      </CardHeader>
   
    <CardBody>
    <div className=' justify-center  items-center ml-14   '>
    <button className='btn bg-transparent rounded-full text-black font-bold border-2 border-yellow-600'>FORMAL SHIRTS</button>
    </div>
    </CardBody>
    </Card>
            </div>
            <div>
            <Card className="mt-6 w-80 h-80">
      <CardHeader color="white" className="relative h-48">
        <img
          src="https://i.ibb.co.com/MgX7sqp/image3.png"
          alt="card-image"
        />
  
      </CardHeader>
   
    <CardBody>
    <div className=' justify-center  items-center ml-16   '>
    <button className='btn bg-transparent rounded-full text-black font-bold border-2 border-yellow-600 '>T-SHIRT</button>
    </div>
    </CardBody>
    </Card>
            </div>
            <div>
            <Card className="mt-6 w-80 h-80">
      <CardHeader color="white" className="relative">
        <img
          src="https://i.ibb.co.com/qsG6MPp/image4.png"
          alt="card-image"
        />
  
      </CardHeader>
   
    <CardBody>
    <div className=' justify-center  items-center ml-14   '>
    <button className='btn bg-transparent rounded-full text-black font-bold border-2 border-yellow-600'>MUSLIM JUBBAH</button>
    </div>
    </CardBody>
    </Card>
            </div>
            <div>
            <Card className="mt-6 w-80 h-80">
      <CardHeader color="white" className="relative h-48">
        <img
          src="https://i.ibb.co.com/VDNRMjz/JENS.jpg"
          alt="card-image"
        />
  
      </CardHeader>
   
    <CardBody>
    <div className=' justify-center  items-center ml-14   '>
    <button className='btn bg-transparent rounded-full text-black font-bold border-2 border-yellow-600'>MEN JEANS</button>
    </div>
    </CardBody>
    </Card>
            </div>
            <div>
            <Card className="mt-6 w-80 h-80">
      <CardHeader color="white" className="relative ">
        <img
          src="https://i.ibb.co.com/BjpMzM0/image5.jpg"
          alt="card-image"
        />
  
      </CardHeader>
   
    <CardBody>
    <div className=' justify-center  items-center ml-14   '>
    <button className='btn bg-transparent rounded-full text-black font-bold border-2 border-yellow-600'>JEANS ITEM</button>
    </div>
    </CardBody>
    </Card>
            </div>
        </div>
    );
};

export default MensCard;