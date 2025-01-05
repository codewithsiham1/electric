import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">দুঃখিত!</h1>
      <p className="text-xl mt-4">কিছু একটা ভুল হয়েছে।</p>
      <Link to="/" className="mt-6 btn btn-primary">
        হোমে ফিরে যান
      </Link>
    </div>
        </div>
    );
};

export default Errorpage;