import React from "react";
import millify from "millify";

// Components
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

// Services
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  const Titles = [
    "Total Cryptocurrencies",
    "Total Coins",
    "Total Markets",
    "Total Exchanges",
    "Total Market Cap",
    "Total 24h Volume",
  ];
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      {data && (
        <Row>
          {Object.keys(globalStats).map((state, i) => (
            <Col span={12} key={state}>
              <Statistic
                title={Titles[i]}
                value={millify(globalStats[state])}
              />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homepage;
