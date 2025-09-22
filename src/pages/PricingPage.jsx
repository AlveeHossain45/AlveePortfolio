import React from 'react';
import Pricing from '../components/sections/Pricing';

const PricingPage = () => {
  return (
    // pt-20 ক্লাসটি হেডার এর নিচে থেকে কনটেন্ট শুরু করতে সাহায্য করে
    <main className="pt-20 min-h-screen">
      <Pricing />
    </main>
  );
};

// একটি টাইপো ছিল, 'Pricingpage' কে 'PricingPage' করা হয়েছে
export default PricingPage;