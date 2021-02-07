import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const FilterSlider=()=> {
  return (
    <div className="slider">


      <div className="sliderArea">
        <Range
          marks={{
            100: `$ 100`,
            500: `$ 500`
          }}
          min={100}
          max={500}
          defaultValue={[200, 300]}
          tipFormatter={value => `$ ${value}`}
          tipProps={{
            placement: "top",
            visible: true
          }}
        />
      </div>
    </div>
  );
}
export default FilterSlider;
