import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getItems, getMerchant } from "~/services/Clover";
import Products from "~/components/Products";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import { Drawer } from "../components/Drawer";
import { Cart } from "~/components/Cart";

export function routeData() {
  return {
    items: createServerData$(getItems),
    merchant: createServerData$(getMerchant)
  } 
}

export default function Home() {
  const {items, merchant} = useRouteData<typeof routeData>();

  return (
    <>
    <Navigation merchant={merchant()}/>
    <main class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Products items={items} />
      <Drawer>
        <Cart />
        </Drawer>
    </main> 
    <Footer />
    </>
  );
}