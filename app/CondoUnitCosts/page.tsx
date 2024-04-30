import React from 'react';
import CondoCostsForm from './form';

const CondoUnitCostPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 w-full max-w-xs mx-auto">
        <h1 className="font-bold text-3xl mb-3 pt-10 mt-10">Set Condo Unit Costs</h1>
        <CondoCostsForm />
      </div>
    </div>
  );
};

export default CondoUnitCostPage;
