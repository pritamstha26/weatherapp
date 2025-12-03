import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Badges from "../common/Badges";
export default function WeatherCard() {
  return (
    <article className="p-8 shadow-2xl   rounded-2xl max-w-2xl min-w-xs mx-auto ">
      <CardHeader />
      <CardBody />
    </article>
  );
}
