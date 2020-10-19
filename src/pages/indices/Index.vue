<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
      <promo/>
      <about />
      <screenshots :is-gray="true"/>
      <download/>
      <work-process/>
      <price :is-gray="true"/>
      <Parking />
      <contact/>
    </div>
    <site-footer :show-subscribe="true"/>
    <copyright/>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Banner from "../../views/index-one/Banner";
import Promo from "../../views/index-one/Promo";
import Download from "../../views/index-one/Download";
import Screenshots from "../../views/index-one/Screenshots";
import WorkProcess from "../../views/commons/sections/WorkProcess";
import Price from "../../views/index-one/Price";
import Contact from "../../views/index-one/Contact";
import Parking from "@/components/Paqueaderos";
import SiteFooter from "../../views/commons/SiteFooter";
import About from "../../views/index-one/About";
import Copyright from "../../views/commons/Copyright";


export default {
  name: "IndexOne",
  components: {
    NavBar,
    Banner,
    Promo,
    Screenshots,
    About,
    Download,
    WorkProcess,
    Parking,
    Price,
    Contact,
    SiteFooter,
    Copyright,
  }
};
</script>