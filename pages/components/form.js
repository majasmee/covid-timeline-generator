import React from 'react'
import { useFormik } from 'formik'

const Form = () => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: async (values, { setSubmitting }) => {

        }
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
        >
            <div className="card card-body mb-3 text-light" style={{ backgroundColor: '#34577e'}}>
                <h4 class="mb-3">ข้อมูลผู้ป่วย &rarr;</h4>
                <div className="form-group">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">เพศ</label>
                            <select className="custom-select d-block w-100">
                                <option>ชาย</option>
                                <option>หญิง</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">อายุ</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">อาชีพ</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-body text-light" style={{ backgroundColor: '#34577e'}}>
                <h4 className="mb-3">ข้อมูลไทม์ไลน์ &rarr;</h4>
                <div className="row mb-3">
                    <div className="col">
                        <label class="form-label">วันเวลา</label>
                        <input type="datetime-local" className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label class="form-label">รายละเอียด</label>
                        <textarea className="form-control" rows="5" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="submit" className="btn btn-warning btn-block " value="เพิ่มข้อมูล" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;