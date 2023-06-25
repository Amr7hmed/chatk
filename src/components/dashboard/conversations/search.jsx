import React from 'react'

function Search() {
    return (
        <div className='dashboard__search d-flex justify-content-between align-items-center'>
            <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                    <img src="/assets/icons/icon-search.svg"
                        alt="Cody – The AI Trained on Your Business" />
                </span>
                <input type="text" className="form-control" 
                placeholder="Search conversations..." 
                aria-label="Search" aria-describedby="basic-addon1" />
            </div>

            <button type="button" className='btn btn-add'>
                <img src="/assets/icons/icon-add.svg" alt="" />
            </button>
        </div>
    )
}

export default Search;