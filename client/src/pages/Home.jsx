import React from 'react';

export default function Home() {
  return (
    <main className='bg-sky-50'>
      <div className="m-auto w-10/12 py-8 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center shadow-md bg-no-repeat rounded-3xl" style={{ backgroundImage: `url("/images/dan-burton-CuCSy7zYrdA-unsplash.png")`, height:640 }}>
          {/* Overlay */}
          <div className="absolute inset-0 rounded-3xl opacity-30"></div>
          {/* Content */}
          <div className="absolute  inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl flex flex-col gap-5">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-mono">Easy way to find a perfect property</h1>
              <p className="text-lg sm:text-xl md:text-2xl font-mono">We provide a complete service for the sale, purchase or rental of real estate</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
