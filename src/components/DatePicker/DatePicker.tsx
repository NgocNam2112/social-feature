import Image from "next/image";
import React, { useState } from "react";
import styles from "./DatePicker.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { IPickDate } from "@/types/types";
import ErrorMessage from "../helper/ErrorMessage/ErrorMessage";

interface IProps {
  pickDateInfor: IPickDate;
  value: Date | null;
  isShowTimeSelectOnly?: boolean;
  onChange: Function;
  error: string;
}

const DatePick: React.FC<IProps> = ({
  pickDateInfor,
  value,
  isShowTimeSelectOnly = false,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: any) => {
    setIsOpen(!isOpen);
    onChange(pickDateInfor.name, e);
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
          <Image
            src={pickDateInfor.src}
            alt={"date time icon"}
            width={pickDateInfor.size}
            height={pickDateInfor.size}
          />
          <div>
            {value
              ? isShowTimeSelectOnly
                ? dayjs(value).format("HH:mm:ss")
                : dayjs(value).format("YYYY-MM-DD")
              : pickDateInfor.title}
          </div>
        </div>
        <ErrorMessage errorMessage={error} />
        {isOpen && (
          <div className={styles.select_datepick}>
            {isShowTimeSelectOnly ? (
              <DatePicker
                selected={value}
                onChange={handleChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                inline
              />
            ) : (
              <DatePicker selected={value} onChange={handleChange} inline />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DatePick;
