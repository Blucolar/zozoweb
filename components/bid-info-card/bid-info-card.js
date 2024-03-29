import { useSelector } from "react-redux";
import { truncateString, formatNumber } from "../../utils";
import { toast } from "react-toastify";
import { useCountdown } from "../../hooks/useCountdown";
import { motion } from "framer-motion";
import Link from "next/link";
import Loader from "../loader";
import ErrorMessage from "../error-message";
import styles from "./bid-info-card.module.scss";

export default function BidInfoCard({ data, title }) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <ul>
        {!data && <Loader />}
        {data?.length === 0 && (
          <ErrorMessage
            message={`No ${title} at the moment`}
            fontSize="1.4rem"
            width="15rem"
          />
        )}
        {data && data.map((item, index) => <Item key={index} item={item} />)}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const { user } = useSelector((state) => state.auth.customer);
  const [days, hours, minutes, seconds] = useCountdown(
    item.start_time,
    item.end_time
  );

  function eventHandler() {
    if (user) {
      return;
    }
    toast.warning("Login to continue!");
  }
  return (
    <li>
      <Link href={user ? `/product/${item.id}` : "javascript:void(0)"}>
        <a onClick={eventHandler}>
          <motion.img src={item.product.images.main} alt="" />
          <div>
            <h4>{truncateString(item.product.name, 15)}</h4>
            <p>&#8358;{formatNumber(item.product.price)}</p>
            {!item.ended && (
              <span>
                {formatNumber(days)}:{formatNumber(hours)}:
                {formatNumber(minutes)}:{formatNumber(seconds)}
              </span>
            )}
            {item.ended && (
              <span style={{ color: "#cd3737" }}>Ended: 00:00:00:00</span>
            )}
          </div>
        </a>
      </Link>
    </li>
  );
}
