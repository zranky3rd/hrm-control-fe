import { Layout, LayoutProps } from "react-admin";
import { MyAppBar } from "./my-app-bar";

export const MyLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={MyAppBar} />
);
