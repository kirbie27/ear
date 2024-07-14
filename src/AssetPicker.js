
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { AiOutlineStop } from "react-icons/ai";
import { LuBanana } from "react-icons/lu";
const AssetPicker = (props) => {
  const { value = -1, type = "Asset", data = [1, 2, 3, 4, 5, 7, 8, 9, 10], setValue } = props;

  const [start, setStart] = useState(0);
  const [selected, setSelected] = useState(value);

  const select = useCallback((index) => {
    setSelected(index);
    setValue(index);
  }, [setValue]);

  useEffect(() => {
    setSelected(value);
  }, [value])

  return (
    <div className="assetpicker" >
      <p className='ptext'>
        Choose a {type}
      </p>
      <div className='pickercomp'>
        <div className='bcont'>
          <LuBanana onClick={() => {
            setStart((prev) => (prev - 1) < 0 ? prev : prev - 1)
          }} size={30} className={`${(data.length + 1 > 5 && (start > 0)) ? 'bactive' : 'b'} rocketleft`} color={`${data.length + 1 > 5 ? '#e8c605' : 'white'}`} />
        </div>

        <div className='choices'>
          <div onClick={() => {
            select(-1);
          }} className={`${selected === -1 ? 'choiceactive' : 'choice'}`}>
            <AiOutlineStop size={25} />
          </div>
          {
            data.map((x, i) => {
              if (!(i >= start && i <= start + 3))
                return null;

              if (i === selected)
                return (
                  <div className='choiceactive' onClick={() => {
                    select(i);
                  }}>
                    <img alt="asset" className="asset" src={data[i]} />
                  </div>
                );
              else
                return (
                  <div className='choice' onClick={() => {
                    select(i);
                  }}>
                    <img alt="asset" className="asset" src={data[i]} />
                  </div>
                );
            })
          }
        </div>
        <div className='bcont'>
          <LuBanana size={30} onClick={() => {
            setStart((prev) => (prev + 1) >= data.length - 3 ? prev : prev + 1)
          }} className={`${(data.length + 1 > 5 && (data.length - start > 4)) ? 'bactive' : 'b'} rocketright`} color={`${data.length + 1 > 5 ? '#e8c605' : 'gray'}`} />
        </div>

      </div>

    </div>
  );

}
export default AssetPicker;
