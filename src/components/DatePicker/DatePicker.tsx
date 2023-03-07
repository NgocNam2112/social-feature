import Image from "next/image";
import React, { useState } from "react";
import styles from "./DatePicker.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

interface IProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  isShowTimeSelectOnly: boolean;
}

const DatePick: React.FC<IProps> = ({
  src,
  alt,
  width,
  height,
  title,
  isShowTimeSelectOnly,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: any) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div
          className={styles.datepick_wrapper}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className={styles.datepicker}>
        <div className={styles.select} onClick={handleClick}>
          <Image src={src} alt={alt} width={width} height={height} />
          <div>
            {startDate
              ? isShowTimeSelectOnly
                ? dayjs(startDate).format("YYYY-MM-DD")
                : dayjs(startDate).format("LT")
              : title}
          </div>
        </div>
        {isOpen && (
          <div className={styles.select_datepick}>
            {isShowTimeSelectOnly ? (
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                inline
              />
            ) : (
              <DatePicker selected={startDate} onChange={handleChange} inline />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DatePick;
