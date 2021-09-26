import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import moment from "moment";

const { Meta } = Card;

const ConnectNav = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <div className='d-flex justify-content-around'>
      <Card>
        <Meta
          title={auth.name}
          avatar={<Avatar>{auth.name[0]}</Avatar>}
          description={`Joined ${moment(auth.createdAt).fromNow()}`}
        />
      </Card>
      {auth && auth.stripe_seller && auth.stripe_seller.charges_enabled && (
        <>
          <div>Pending balance</div>
          <div>Payout settings</div>
        </>
      )}
    </div>
  );
};

export default ConnectNav;
