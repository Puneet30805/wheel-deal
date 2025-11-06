// pages/cars/chandigarh.js
import Citybuy from '../../components/Citybuy';

// Optional: If you need server-side props
export async function getServerSideProps() {
  return {
    props: {
      // You can pass additional city-specific data here
      meta: {
        title: "Buy Cars in Chandigarh | YourSiteName",
        description: "Find the best second-hand cars for sale in Chandigarh."
      }
    }
  };
}

export default function ChandigarhPage() {
  return <Citybuy />;
}