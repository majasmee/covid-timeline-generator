import React, { useState } from 'react'
import moment from 'moment'

const Timeline = (props) => {
    const { value, clickSubmit, table } = props
    const timeline = table
    let timelineTable = []

    // function generateTimeline(timeline) {
    //     for (var i = 0; i < timeline.length; i++) {
    //         timelineTable.push(<>
    //             <li className="event" key={i} data-date={moment(timeline[i]?.datetime).format('DD/MM/YYYY')}>
    //                 <h3>{moment(timeline[i].datetime).format('HH:mm')}</h3>
    //                 <p>{timeline[i].detail}</p>
    //             </li>
    //         </>)
    //     }

    //     return timelineTable;
    // }

    return (
        <div className="card card-body" style={{ backgroundColor: "#ffc107" }}>
            <h4 className="text-center text-dark mb-3">Timeline</h4>
            {
                clickSubmit ? <>
                    <h3 className="text-center text-dark">ผู้ป่วย{value ? value.gender : null} อายุ {value ? value.age : null} ปี</h3>
                    <h5 className="text-center text-dark">อาชีพ {value ? value.job : null}</h5>

                    <div className="row">
                        {/* <div className=""> */}
                        <div className="card-body">
                            <div id="content">
                                <ul className="timeline">
                                    {/* {generateTimeline(timeline)} */}
                                    {timeline.map((data, index) => {
                                        const { datetime, detail } = data
                                        return (
                                            <li key={index} className="event" data-date={moment(datetime).format('DD/MM/YYYY')}>
                                                <h3>{moment(datetime).format('HH:mm')}</h3>
                                                <p>{detail}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* </div> */}
                    </div>
                </>
                    : <h4 className="text-center text-danger">ท่านยังไม่ได้เพิ่มข้อมูล !!</h4>
            }

        </div>
    )
}

export default Timeline