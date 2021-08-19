import React from 'react'
import './Body.css';
import Header from './Header/Header';

const Body = ({ spotify }) => {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/kBxOXjvsKFCQEAYNTswiP4Dm-58iYSHCpOs9oKlpD96F0FQO6jyN1T8IB1ZLrVKRQlbHYFbXssPX489PwolFVKbXWsw9G8YOiRWMPkd3aryLaOlt6g5ZKWiOJL4ZzFaCb7__3oQ177TjRBDTGQ1Avtm13wefcJl7vqz8wMPmCpXzkArJlFlXAh8CtGFDFw0QHjejPKmHGOm0YeqsQrIfTFNxMcFRU_IhnbsbXD0F2XH7n40Y5PRaMRaMef8ue6_otogLCRGQqw212N42VXeB9lyFyLDhO_pZ3rbyZJ1UqrpSnvzATFJw4Z3gbAH9UkH_DxCrzazmDJ6i-qEKaLIdt1HXJu0DcwY4zaTMxGF9ES-NPhP7iRmPgivVAFi2FBzTi1JZcrnGKIQQBND3JkK2UQ==/NzA6NDE6MTBUNjItODAtMQ==" alt="discover weekly img" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description...</p>
        </div>
      </div>
    </div>
  )
}

export default Body
