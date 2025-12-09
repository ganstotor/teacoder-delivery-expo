import Home from "components/screens/home/Home";
import { IRoute } from "./navigation.types";
import Auth from "components/screens/home/auth/Auth";

export const routes: IRoute[] = [
    {
    name: 'Home',
    component: Home
  }
];