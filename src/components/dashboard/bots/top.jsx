import React from 'react'

function TopTable() {
  return (

        <div className="d-flex justify-content-between align-items-center dashboard__table__top">
            <h2 className="text-lg font-medium leading-loose d-flex items-center"> Bots </h2>
            <button className="btn btn-primary d-flex justify-content-between align-items-center gap-2 font-medium bg-blue-500 text-white px-4 py-1">
                <img src="/assets/icons/icon-add.svg" alt="" />
                New bot
                </button>
        </div>
  )
}

export default TopTable;