import Message from "../components/App/Message.vue";

export default {
  install: (app: any, options: any) => {
    console.log(app, options);
    app.config.globalProperties.$message = Message;
  },
};
