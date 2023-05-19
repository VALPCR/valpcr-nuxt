<script>
export default {
  mounted() {
    this.logout();
  },
  methods: {
    async logout() {
      const params = this.$auth.strategy.token.get();
      await this.$auth
        .logout(params)
        .then(() => {
          // Redirect to login
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
