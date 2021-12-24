import React, {
  useCallback,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import "./Booking.scss";
import { Provider } from "../context";
import * as R from "ramda";

import context from "../context";

const Booking = () => {
  const contextValue = useContext(context);
  const {} = contextValue;
  const [wsState, setWsState] = useState();
  const [campSelectedList, setCampSelectedList] = useState([]);
  const [userId, setUserId] = useState("");
  console.log('campSelectedList', campSelectedList)


  useEffect(() => {
    //使用 WebSocket 的網址向 Server 開啟連結
    let ws = new WebSocket("ws://localhost:3400");
    console.log(ws);
    setWsState(ws);

    //開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
    ws.onopen = () => {
      console.log("open connection");
      //   ws.send("yyyes");
    //   ws.send(JSON.stringify([{
    //     campId: "0035",
    //     campArea: "A1",
    //     campType: "budget",
    //     campName: "悠遊生活",
    //     campCapacity: 4,
    //     campPrice: 2000,
    //   }]));
    };

    //關閉後執行的動作，指定一個 function 會在連結中斷後執行
    ws.onclose = () => {
      console.log("close connection");
    };

    //接收 Server 發送的訊息
    ws.onmessage = (event) => {
      console.log("event", event);
      console.log("event.data", JSON.parse(event.data));

      setCampSelectedList(JSON.parse(event.data));
    };
  }, []);


  const pickCamp = (campItem) => {
    let tempCampList = [...campSelectedList];
    console.log("campItem", campItem);
    if (R.includes(campItem, tempCampList)) {
        tempCampList = R.without([campItem], tempCampList);
    } else {
      tempCampList.push(campItem);
    }
    console.log('tempCampList', tempCampList);
    setCampSelectedList(tempCampList);
    wsState.send(JSON.stringify(tempCampList));
  };

  let campList = [
    {
      campId: "0035",
      campArea: "A1",
      campType: "budget",
      campName: "悠遊生活",
      campCapacity: 4,
      campPrice: 2000,
    },
    {
      campId: "0036",
      campArea: "A1",
      campType: "budget",
      campName: "悠遊生活",
      campCapacity: 4,
      campPrice: 2000,
    },
    {
      campId: "0041",
      campArea: "A1",
      campType: "budget",
      campName: "恬靜生活",
      campCapacity: 4,
      campPrice: 2000,
    },
    {
      campId: "0042",
      campArea: "A1",
      campType: "budget",
      campName: "恬靜生活",
      campCapacity: 4,
      campPrice: 2000,
    },
    {
      campId: "0051",
      campArea: "A1",
      campType: "fancy",
      campName: "夏日海洋",
      campCapacity: 6,
      campPrice: 4000,
    },
    {
      campId: "0052",
      campArea: "A1",
      campType: "fancy",
      campName: "夏日海洋",
      campCapacity: 6,
      campPrice: 4000,
    },
    {
      campId: "0061",
      campArea: "A1",
      campType: "fancy",
      campName: "魔幻森林",
      campCapacity: 6,
      campPrice: 4000,
    },
    {
      campId: "0062",
      campArea: "A1",
      campType: "fancy",
      campName: "魔幻森林",
      campCapacity: 6,
      campPrice: 4000,
    },
  ];

  return (
    <div className={`booking_container`}>
      <Provider value={contextValue}>
        <div className="camp_area">
          {campList.map((campItem, campIndex) => {
            return (
              <div
                className={`each_camp ${
                  R.includes(campItem, campSelectedList) ? "selected" : ""
                }`}
                key={campIndex}
                onClick={() => pickCamp(campItem)}
              >
                <div className="camp_name">{campItem.campName}</div>
                <div className="camp_capacity">{campItem.campCapacity}人</div>
                <div className="camp_price">{campItem.campPrice}元</div>
              </div>
            );
          })}
          <div className="camp"></div>
          <div className="img"></div>
        </div>
      </Provider>
    </div>
  );
};
export default Booking;
