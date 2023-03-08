import Image from 'next/image';
import React from 'react';
import styles from './InputForm.module.scss'

interface IProps {
    className: string;
    src: string;
    alt: string;
    width: number;
    height: number;
    placeholder: string;
    type: string;
    value: string | number;
    setValue: Function;
}

const InputForm: React.FC<IProps> = ({
    className, src, alt, width, height, placeholder,type, value, setValue
                                     }) => {
    return (
        <div>
            <div className={className}>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
                <input type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <p className={styles.errorMessage}>{!value && 'Field required!!!'}</p>
        </div>
    )
}

export default InputForm