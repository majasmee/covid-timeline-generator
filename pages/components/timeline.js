import React, { useState } from 'react'

const Timeline = (props) => {
    const { value, clickSubmit } = props

    return (
        <div className="card card-body" style={{ backgroundColor: "#ffc107" }}>
            <h4 className="text-center text-dark mb-3">Timeline</h4>
            {
                clickSubmit ? <>
                    <h3 className="text-center text-dark">ผู้ป่วย{value ? value.gender : null} อายุ {value ? value.age : null} ปี</h3>
                    <h5 className="text-center text-dark">อาชีพ {value ? value.job : null}</h5>
                </>
                : <h4 className="text-center text-dark">ท่านยังไม่ได้เพิ่มข้อมูล</h4>
            }


        </div>
    )
}

export default Timeline