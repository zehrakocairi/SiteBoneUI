<template>
  <div>
    <div class="row">
      <h4 class="text-left q-ma-sm">Users</h4>
    </div>
    <hr />
    <br />
    <sb-user-table> </sb-user-table>
  </div>
</template>

<script>
import sbUserTable from "../components/SbUserTable.vue";
export default {
  name: "Users",
  components: { sbUserTable },
};
</script>

<style></style>
