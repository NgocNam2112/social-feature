import Image from "next/image";
import React, {useRef, useState} from "react";
import BannerPickerModal from "../BannerPickerModal/BannerPickerModal";
import DatePick from "../DatePicker/DatePicker";
import styles from "./Main.module.scss";
import InputForm from "@/components/helper/InputForm";

type Props = {
    children: string | JSX.Element | JSX.Element[];
};

const Main = ({children}: Props) => {
    const refTitle = useRef(null);
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [venue, setVenue] = useState<string>('')
    const [maxOpacity, setMaxOpacity] = useState<number>(0)
    const [cost, setCost] = useState<number>(0)

    const handleChangeVenue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVenue(e.target.value)
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.event_container}>
                    <div className={styles.event_info}>
                        <div className={styles.title_container}>
              <span
                  className={styles.title}
                  contentEditable={true}
                  ref={refTitle}
              >
                Web3 Founders & Designers Mixer + fireside chat with Coinbase
                Senior Designer & Airfoil founder
              </span>
                        </div>
                        <div className={styles.select_container}>
                            <DatePick
                                src="/icons/date-icon.svg"
                                alt="date icon"
                                width={34}
                                height={34}
                                title="Date"
                                isShowTimeSelectOnly={false}
                            />
                            <DatePick
                                src={"/icons/clock-icon.svg"}
                                alt="clock icon"
                                width={48}
                                height={48}
                                title="Time"
                                isShowTimeSelectOnly={true}
                            />
                        </div>

                        <InputForm className={styles.location}
                                   src={"/icons/location-icon.svg"}
                                   alt={"location"}
                                   width={14}
                                   height={17}
                                   placeholder={"Venue"}
                                   type={"string"}
                                   value={venue}
                                   setValue={setVenue}
                        />

                        <div className={styles.cost_container}>
                            <InputForm className={styles.size}
                                       src={"/icons/max-capacity-icon.svg"}
                                       alt={"max-capacity-icon"}
                                       width={17}
                                       height={15}
                                       placeholder={"max capacity"}
                                       type={"number"}
                                       value={maxOpacity}
                                       setValue={setMaxOpacity}
                            />

                            <InputForm className={styles.size}
                                       src={"/icons/cost-icon.svg"}
                                       alt={"cost icon"}
                                       width={17}
                                       height={15}
                                       placeholder={"Cost per person"}
                                       type={"number"}
                                       value={cost}
                                       setValue={setCost}
                            />
                        </div>
                    </div>

                    <div
                        className={styles.add_banner_container}
                        onClick={() => setIsShowModal(true)}
                    >
                        <Image
                            src="/icons/add-banner-icon.svg"
                            alt="add-banner-icon"
                            width={24}
                            height={24}
                        />
                        Add a banner
                    </div>
                </div>

                <div className={styles.des_container}>
                    <p>Description</p>
                    <textarea placeholder="Description of your event.."/>
                </div>

                <div className={styles.settings_container}>
                    <h2>Settings</h2>
                    <div className={styles.approve_attendee}>
                        <Image
                            src="/icons/uncheckbox-icon.svg"
                            alt="uncheckbox-icon"
                            width={20}
                            height={20}
                        />
                        <span>I want to approve attendees</span>
                    </div>

                    <div className={styles.privacy}>
                        <h4>Privacy</h4>
                        <div className={styles.radio_container}>
                            <div className={styles.radio}>
                                <Image
                                    src="/icons/uncheck-radio-icon.svg"
                                    alt="uncheck-radio-icon"
                                    width={20}
                                    height={20}
                                />
                                <span>Public</span>
                            </div>

                            <div className={styles.radio}>
                                <Image
                                    src="/icons/uncheck-radio-icon.svg"
                                    alt="uncheck-radio-icon"
                                    width={20}
                                    height={20}
                                />
                                <span>Curated Audience</span>
                            </div>

                            <div className={styles.radio}>
                                <Image
                                    src="/icons/uncheck-radio-icon.svg"
                                    alt="uncheck-radio-icon"
                                    width={20}
                                    height={20}
                                />
                                <span>Community Only</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.privacy}>
                        <h4>Tag your social</h4>
                        <p>Pick tags for our curation engine to work its magin</p>
                    </div>

                    <div className={styles.tags_container}>
                        <div className={styles.tag}>
                            Engineering{" "}
                            <Image
                                src="/icons/close-icon.svg"
                                alt="close icon"
                                width={12}
                                height={12}
                            />
                        </div>
                    </div>

                    <div className={styles.tags_container}>
                        <p>Product</p>
                        <p>Marketing</p>
                        <p>Desing</p>
                    </div>
                </div>

                <button className={styles.btn_create}>CREATE SOCIAL</button>
            </main>
            {isShowModal && <BannerPickerModal setOpen={setIsShowModal}/>}
        </>
    );
};

export default Main;
