// import React from 'react';

import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import Specification from "./Specification";

const Tab = () => {
  return (
    <div className="w-full mx-auto px-4 py-6 md:px-6 lg:px-16">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className=" tab focus:text-[white] active:text-white text-black text-lg [--tab-bg:#C00A27]"
          aria-label="Specification"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Specification />
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className=" tab focus:text-[white] active:text-black text-black text-lg [--tab-bg:#C00A27]"
          aria-label="ReviewForm"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReviewForm />
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className=" tab focus:text-[white] active:text-black text-black text-lg [--tab-bg:#C00A27]"
          aria-label="Reviews"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default Tab;
