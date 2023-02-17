import React from "react";
import ReactDOM from "react-dom/client";
import { faker } from "@faker-js/faker";
import moment from "moment/moment";
import FeedExampleBasic from "./feed";

// data
const events = [
  {
    // faker tanggal
    // menggunakan moment untuk selisih data sekarang dan data post dibuat
    date: moment(faker.date.recent()).fromNow(),
    // faker image (avatar)
    image: faker.image.avatar(),
    // faker nama
    name: faker.name.firstName(),
    // faker paragraf
    comment: faker.lorem.lines(),
  },
  {
    date: moment(faker.date.recent()).fromNow(),
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    comment: faker.lorem.lines(),
  },
  {
    date: moment(faker.date.recent()).fromNow(),
    image: faker.image.avatar(),
    name: faker.name.firstName(),
    comment: faker.lorem.lines(),
  },
];

const feed = ReactDOM.createRoot(document.getElementById("feed"));

// render data dari fungsi FeedExampleBasic pada file feed.js
feed.render(<FeedExampleBasic data={events} />);
