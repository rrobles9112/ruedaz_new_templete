<template>
  <div>
    <nav-bar/>
    <div class="main">

      <price :is-gray="true"/>
      <TermsAndConditions />
    </div>
    <site-footer :show-subscribe="true"/>
    <copyright/>
  </div>
</template>

<script>
import NavBar from "../../views/commons/NavBar";
import Price from "../../views/index-one/Price";
import SiteFooter from "../../views/commons/SiteFooter";
import Copyright from "../../views/commons/Copyright";
import TermsAndConditions from "../../components/TermsAndConditions";


export default {
  name: "IndexPromociones",
  components: {
    NavBar,
    Price,
    SiteFooter,
    Copyright,
    TermsAndConditions,
  }
};
</script>