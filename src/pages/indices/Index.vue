<template>
  <div>
    <nav-bar/>
    <div class="main">
      <banner/>
      <promo/>
      <screenshots :is-gray="true"/>
      <download/>
      <work-process/>
      <price :is-gray="true"/>
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
import SiteFooter from "../../views/commons/SiteFooter";
import Copyright from "../../views/commons/Copyright";


export default {
  name: "IndexOne",
  components: {
    NavBar,
    Banner,
    Promo,
    Screenshots,
    Download,
    WorkProcess,
    Price,
    Contact,
    SiteFooter,
    Copyright,
  }
};
</script>