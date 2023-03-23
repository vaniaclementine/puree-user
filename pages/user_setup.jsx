import React, { useState } from 'react'
import Satu from "./user_setup_satu"
import Dua from "./user_setup_dua"


export default function MerchantSetup() {
    const [page, setPage] = useState(0);

    const conditionalComponent = () => {
      switch (page) {
        case 0:
          return <Satu />;
        case 1:
          return <Dua />;
        default:
          return <Satu />;
      }
    };

  return (
    <>
        {conditionalComponent()}
        {/* <Button onClick={handleSubmit}>
          { page === 0 || page === 1 ? "Next" : "Submit" }
        </Button> */}
    </>
  )
}