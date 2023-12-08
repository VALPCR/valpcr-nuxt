<template>
  <div>
    <Login />
    <TermsModal />
  </div>
</template>

<script>
import TermsModal from "../components/TermsModal";
import Login from "../components/Login";
import {
  Modal,
  initTE,
} from "tw-elements";

export default {
  components: { Login, TermsModal },
  mounted() {
    initTE(Modal);

    const termsModal = new Modal(document.getElementById("termsModal"));
    termsModal.show();
  }
};
</script>
