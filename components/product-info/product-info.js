import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { usePaystackPayment } from "react-paystack";
import { motion } from "framer-motion";
import { useCountdown } from "../../hooks/useCountdown";
import { formatNumber } from "../../utils";
import { GavelIcon, HeartIcon } from "../../public/svg/icons";
import {
  getSingleBidEvent,
  getBidEventAccess,
  accessBidEvent,
  bidOnEvent,
  updateStake,
} from "../../services/customer";
import { ClipLoader } from "react-spinners";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCart } from "../../store/slices/cartSlice";
import OtpInput from "react-otp-input";
import Modal from "../modal/modal";
import Button from "../ui/button/";
import styles from "./product-info.module.scss";

export default function ProductInfo() {
  const router = useRouter();
  const biddingEventId = router.query.pid;
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [days, hours, minutes, seconds] = useCountdown(
    data?.bidding_event.start_time,
    data?.bidding_event.end_time
  );
  console.log(days, hours, minutes, seconds);
  // const [index, setIndex] = useState(0);
  const { user } = useSelector((state) => state.auth.customer);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(false);
  const [accessCode, setAccessCode] = useState(null);
  const [modalDisplay, setModalDisplay] = useState(false);

  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: 750000,
    publicKey: "pk_test_69632545288d812cae292185bebcfb87ca0feded",
  };

  const initializePayment = usePaystackPayment(config);

  const addToCart = () => {
    dispatch(addCart(data.bidding_event));
  };

  async function bidHandler(e) {
    e.preventDefault();
    if (data.access_status === "approved") {
      setLoading(true);
      const body = {
        bidding_event_id: biddingEventId,
        customer_id: user.customer.id.toString(),
        stake: +amount,
      };
      console.log(body);

      try {
        const response = await bidOnEvent(body);
        setLoading(false);
        setAmount("");
        toast.success(response.data.message, {
          autoClose: 7000,
        });
        setData(null);
        getSingleBidEvent(user.customer.id, biddingEventId).then((response) =>
          setData(response.data)
        );
      } catch (error) {
        setLoading(false);
      }

      return;
    }

    if (data.access_status === "requested") {
      setModalDisplay(true);
    }

    if (data.access_status === "none") {
      initializePayment(onSuccess, onClose);
    }
  }

  async function updateBidHandler() {
    setLoading(true);
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.customer.id.toString(),
      stake: +amount,
    };
    try {
      const response = await updateStake(body);
      toast.success(response.data.message, {
        autoClose: 7000,
      });
      console.log(response);
      setLoading(false);
      setAmount("");
      setData(null);
      getSingleBidEvent(user.customer.id, biddingEventId).then((response) =>
        setData(response.data)
      );
    } catch (error) {
      setLoading(false);
    }
  }

  async function onSuccess(reference) {
    setLoading(true);
    console.log(reference);
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.customer.id.toString(),
      payment_reference: reference.reference,
    };
    try {
      const response = await getBidEventAccess(body);
      console.log(response.data.event_access);
      setModalDisplay(true);
      toast.success(response.data.message, {
        autoClose: 7000,
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      setModalDisplay(true);
      setLoading(false);
    }
  }

  function onClose() {
    console.log("closed");
  }

  async function accessEvent() {
    setLoading(true);
    const body = {
      bidding_event_id: biddingEventId,
      customer_id: user.customer.id.toString(),
      access_code: accessCode,
    };
    try {
      const response = await accessBidEvent(body);
      toast.success(response.data.message, {
        autoClose: 7000,
      });
      console.log(response);
      setLoading(false);
      setModalDisplay(false);
      setData(null);
      getSingleBidEvent(user.customer.id, biddingEventId).then((response) =>
        setData(response.data)
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const loadBidEvent = useCallback(async () => {
    const response = await getSingleBidEvent(user.customer.id, biddingEventId);
    return await response.data;
  }, [biddingEventId]);

  useEffect(() => {
    if (biddingEventId && user) {
      loadBidEvent().then((response) => setData(response));
    }
  }, [user, biddingEventId]);

  // useEffect(() => {
  //   console.log(countdown);

  //   if (data && days + hours + minutes + seconds > 0) {
  //     setCountdown(true);
  //     console.log(days + hours + minutes + seconds);
  //   } else {
  //     setCountdown(false);
  //   }
  //   console.log(days, hours, minutes, seconds);
  // }, []);

  return (
    <>
      <div className={styles.container}>
        {data ? (
          <>
            <div className={styles["image-preview"]}>
              <motion.img
                src={data.bidding_event?.product.images.main}
                alt="product image"
              />
              <div>
                {/* {data.bidding_event?.images.map((image, i) => (
            <img
              key={i}
              src={image.src}
              onClick={() => setIndex(i)}
              className={index === i ? styles.selected : null}
            />
          ))} */}
              </div>
            </div>
            <div className={styles["product-description"]}>
              <h1>{data.bidding_event?.product.name}</h1>
              {!data.bidding_event.ended && (
                <div className={styles.watchlist}>
                  <span>
                    <GavelIcon />
                    On Auction{" "}
                  </span>

                  <span className="cursor-pointer" onClick={addToCart}>
                    <HeartIcon style={{ cursor: "pointer" }} />
                    Add to watchlist
                  </span>
                </div>
              )}
              <h3>{data.bidding_event?.product.description}</h3>
              <hr />
              <p>
                {" "}
                With each bid, the price goes up ₦0.01 and the timer starts over
                from 10 seconds
              </p>
              <div className={styles.price}>
                <span>
                  &#8358;{formatNumber(+data.bidding_event?.product.price)}
                </span>

                {(!data.bidding_event.ended || countdown) && (
                  <span>
                    {formatNumber(days)}:{formatNumber(hours)}:
                    {formatNumber(minutes)}:{formatNumber(seconds)}
                  </span>
                )}
                {/* {data.bidding_event.ended && (
                  <span style={{ color: "#cd3737" }}>Ended</span>
                )} */}
              </div>
              <form onSubmit={bidHandler}>
                {data.bidding_event.ended && (
                  <Button
                    type="button"
                    style={{
                      backgroundColor: "#cd3737",
                      cursor: "not-allowed",
                    }}
                  >
                    Ended
                  </Button>
                )}
                {data.access_status === "approved" &&
                  !data.bidding_event.ended && (
                    <input
                      type="number"
                      placeholder="Place your amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  )}

                {data.isMember && !data.bidding_event.ended && (
                  <Button type="button" onClick={updateBidHandler}>
                    {loading ? (
                      <ClipLoader color="#ffffff" size={15} />
                    ) : (
                      "Update Bid"
                    )}
                  </Button>
                )}
                {!data.isMember && !data.bidding_event.ended && (
                  <>
                    {data.access_status === "approved" && (
                      <Button>
                        {loading ? (
                          <ClipLoader color="#ffffff" size={15} />
                        ) : (
                          "Bid Now"
                        )}
                      </Button>
                    )}
                    {data.access_status === "requested" && (
                      <Button style={{ width: "22rem" }}>
                        {loading ? (
                          <ClipLoader color="#ffffff" size={15} />
                        ) : (
                          "Enter Access Code"
                        )}
                      </Button>
                    )}
                    {data.access_status === "none" && (
                      <Button>
                        {loading ? (
                          <ClipLoader color="#ffffff" size={15} />
                        ) : (
                          "Access Bid"
                        )}
                      </Button>
                    )}
                  </>
                )}
              </form>
            </div>
            <div className={styles["ongoing-bidders"]}>
              <h3>Ongoing Bids</h3>
              <ul>
                {data.bidding_event?.customer_events.length !== 0 &&
                  data.bidding_event?.customer_events.map((event, index) => (
                    <li key={index}>
                      <motion.img
                        src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"
                        alt="event image"
                      />
                      <div>
                        <h4>
                          {event.customer.account.first_name}{" "}
                          {event.customer.account.last_name}
                        </h4>
                        <h5>&#8358;{formatNumber(event.stake)}</h5>
                        {data.bidding_event?.winner &&
                          event.customer.id ===
                            data.bidding_event?.winner.customer.id && (
                            <span>Winner</span>
                          )}
                      </div>
                    </li>
                  ))}
                {data.bidding_event?.customer_events.length === 0 && (
                  <li className="h-full justify-center">
                    <p className="text-3xl">ℹ️ No ongoing bids</p>
                  </li>
                )}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={styles["loading-image-preview"]}>
              <div />
            </div>
            <div className={styles["loading-product-description"]}>
              <h1 />
              <div className={styles.watchlist} />
              <h3 />
              <div className={styles.price} />
              <form />
            </div>
            <div className={styles["loading-ongoing-bidders"]} />
          </>
        )}
      </div>

      <Modal
        width="45rem"
        display={modalDisplay}
        title="Enter access code"
        close={() => {
          setModalDisplay(false);
          setAccessCode(null);
        }}
      >
        <div className={styles["access-code"]}>
          <p>
            An access code has been sent to
            <br />
            your email
          </p>
          <OtpInput
            value={accessCode}
            onChange={(code) => setAccessCode(code)}
            numInputs={4}
            containerStyle={styles.inputs}
            shouldAutoFocus
          />
          <Button onClick={accessEvent}>
            {loading ? <ClipLoader color="#ffffff" size={15} /> : "Continue"}
          </Button>
        </div>
      </Modal>
    </>
  );
}
