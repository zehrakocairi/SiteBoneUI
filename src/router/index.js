import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../views/Users.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Testupdate from "../views/TestUpdate.vue";
import Testcreate from "../views/TestCreate.vue";
import Pagelist from "../views/PageList.vue";
import PageForm from "../views/PageForm.vue";
import UserForm from "../views/UserForm.vue";
import UpdateSubsection from "../views/UpdateSubsection.vue";
import SystemSettingsPage from "../views/SystemSettingsPage";
import ServiceSettingsPage from "../views/ServiceSettingsPage";
import ServiceSettingsForm from "../views/ServiceSettingsForm";
import Test1 from "../views/Test1";
import Test2 from "../views/Test2";
import SampleLandingPage from "../views/SampleLandingPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/testupdate/:id",
    name: "Testupdate",
    component: Testupdate,
  },
  {
    path: "/testcreate",
    name: "Testcreate",
    component: Testcreate,
  },
  {
    path: "/pagelist",
    name: "Pagelist",
    component: Pagelist,
  },
  {
    path: "/createpage",
    name: "createpage",
    component: PageForm,
  },
  {
    path: "/updatepage/:id",
    name: "updatepage",
    component: PageForm,
  },
  {
    path: "/createuser",
    name: "createuser",
    component: UserForm,
  },
  {
    path: "/updateuser/:id",
    name: "updateuser",
    component: UserForm,
  },
  {
    path: "/updatesubsection/:id",
    name: "updatesubsection",
    component: UpdateSubsection,
  },
  {
    path: "/systemsettingspage",
    name: "systemsettingspage ",
    component: SystemSettingsPage,
  },
  {
    path: "/servicesettingspage",
    name: "servicesettingspage ",
    component: ServiceSettingsPage,
  },
  {
    path: "/servicesettingsform",
    name: "servicesettingsform ",
    component: ServiceSettingsForm,
  },
  {
    path: "/test1",
    name: "test1 ",
    component: Test1,
  },
  {
    path: "/test2",
    name: "test2 ",
    component: Test2,
  },
  {
    path: "/samplelandingpage",
    name: "samplelandingpage ",
    component: SampleLandingPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
