import React from 'react'

function Search() {
    return (
        <div className='dashboard__Search d-flex justify-content-between align-items-center'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                 aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}

export default Search;