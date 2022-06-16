import React from 'react'
import '../services/Reviews.css'
export default function Reviews() {
  return (
    <div>
        
        <div className="container">
    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
        <h1 className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg" > Customer Reviews</h1>
    </div>
    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p className="fs-110 font-cond-l" >" Best In The Rent Furniture Section. "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130" >Mathew</h5>
          <small className="font-cond case-u lts-sm fs-80 fg-text-l" >Business Man - New York</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p className="fs-110 font-cond-l" >" There is No Alternative of Rent-It . "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130" >Paul Heyman</h5>
          <small className="font-cond case-u lts-sm fs-80 fg-text-l" >Recording Artist - Los Angeles</small>
        </li>
        <li>
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"/>
          <p className="fs-110 font-cond-l" >" Best Quality with Best Rates. "</p>
          <h5 className="font-cond mgb-5 fg-text-d fs-130" >John Carter</h5>
          <small className="font-cond case-u lts-sm fs-80 fg-text-l" >Fund Manager - Chicago</small>
        </li>
      </ul>
      
</div>
    </div>
  )
}
