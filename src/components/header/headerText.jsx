import React from 'react'
import '../../styles/headerText.css'

const HeaderText = () => {

  return (
    <div className='header-text'>
        <h1 className='header-text-h1'>FinancialApp</h1>
        <ul className='header-text-ul'>
          <li className='header-text-h2'><h2>Plan your expenses</h2></li>
          <li className='header-text-h2'><h2>Manage Trades</h2></li>
          <li className='header-text-h2'><h2>Track your finances</h2></li>
        </ul>   
    </div>
  )
}

export default HeaderText