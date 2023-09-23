import {
  Admin,
  Resource
} from "react-admin";
import { authProvider } from "./authProvider";
import { Policies, PolicyCreate } from './components/policies';
import { dataProvider } from "./dataProvider";
import { MyLayout } from './components/my-layout';

export const App = () => (
  <Admin layout={MyLayout} dataProvider={dataProvider} authProvider={authProvider} >
    <Resource name='policies' list={Policies} create={PolicyCreate} />
  </Admin>
);
