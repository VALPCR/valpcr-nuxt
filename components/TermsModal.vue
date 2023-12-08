<template>
  <!-- Modal -->
  <div
    data-te-modal-init
    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    id="termsModal"
    tabindex="-1"
    aria-labelledby="termsModalLabel"
    aria-hidden="true">
    <div
      data-te-modal-dialog-ref
      class="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
      <div
        class="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <!--Modal title-->
          <h5
            class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
            Terms and Condition
          </h5>
        </div>

        <!--Modal body-->
        <div class="relative overflow-y-auto p-4" ref="scrollEvent" @scroll="handleScroll">
          <strong>Privacy Policy</strong>

          <p>ValPCR ("we" or "us") operates valpcr.com ("the Site"). This page informs you of the policies regarding the collection, use, and disclosure of personal information we receive from users of the Site.</p>

          <strong>Information Collection and Use</strong>

          <p>We do not collect personal information unless voluntarily provided. Any personal information shared is handled in accordance with this Privacy Policy. ValPCR may use cookies in accordance with this Privacy Policy and the Data Privacy Act of 2012 (Philippines) to improve user experience.</p>

          <strong>Cookies</strong>

          <p>ValPCR uses cookies to enhance user experience. Affiliate/advertising partners may also use cookies on ValPCR in accordance with this Privacy Policy.</p>

          <strong>Compliance with Data Privacy Act of 2012 (Philippines)</strong>

          <p>ValPCR adheres to the regulations outlined in the Data Privacy Act of 2012 (Philippines), ensuring that all processes related to data collection, usage, and protection align with the provisions set forth in the act.</p>

          <strong>User Consent and Rights</strong>

          <p>By accessing ValPCR, users expressly consent to the collection and processing of their personal information as per our Privacy Policy and in compliance with the Data Privacy Act of 2012 (Philippines). Users maintain the right to access, rectify, and update their personal information stored by ValPCR.</p>

          <strong>Security Measures and Disclaimer</strong>

          <p>ValPCR employs appropriate security measures to protect personal information in line with the requirements of the Data Privacy Act of 2012 (Philippines). However, users acknowledge and accept the inherent risks associated with data transmission and storage despite these measures.</p>
          <div style="height:50px;"></div>

          <strong>Terms of Service</strong>
          <br>
          <strong>1. License and Use</strong>

          <p>ValPCR and/or its licensors own all intellectual property rights for the material on ValPCR. Users may access this content for personal use but may not republish, sell, rent, reproduce, or redistribute it.</p>

          <strong>2. Hyperlinking and iFrames</strong>

          <p>Certain organizations may link to ValPCR without prior written approval, provided the links are not deceptive and do not imply endorsement. Creating frames that alter ValPCR's visual appearance is prohibited without prior written permission.</p>

          <strong>3. Content Liability and Reservation of Rights</strong>

          <p>ValPCR is not responsible for content appearing on external websites linked to ValPCR. Websites linking to ValPCR should not contain inappropriate content. ValPCR reserves the right to request the removal of links and to amend these terms and conditions.</p>

          <strong>4. Disclaimer</strong>

          <p>ValPCR excludes liability for certain matters and does not guarantee the accuracy, availability, or completeness of information on the website.</p>

          <strong>5. Changes to Terms of Service</strong>

          <p>We reserve the right to make changes or modifications to these Terms of Service at any time without notice. By continuing to use our site after any modifications are made, you agree to be bound by the updated Terms of Service.</p>

          <strong>7. Proprietary Rights</strong>

          <p>Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, software, website designs on the site, and the trademark, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>

          <div style="height:25px;"></div>
          <p>By accessing or using ValPCR, you agree to these Terms. ValPCR reserves the right to modify, suspend, or terminate access to ValPCR or these Terms at any time.</p>
        </div>

        <!--Modal footer-->
        <div
          class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <button
            v-if="showButton"
            type="button"
            class="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            data-te-modal-dismiss
            @click="acceptTerms"
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    }
  },
  methods: {
    acceptTerms() {
      localStorage.setItem('terms', 'true');
    },
    handleScroll() {
      if (this.$device.isDesktop) {
        this.showButton = this.$refs.scrollEvent.scrollTop >= 900
      } else if (this.$device.isTablet) {
        console.log(this.$refs.scrollEvent.scrollTop);
        this.showButton = this.$refs.scrollEvent.scrollTop >= 700
      }
    },
  },
};
</script>

<style scoped>
  p {
    margin-bottom: 15px;
  }
</style>
