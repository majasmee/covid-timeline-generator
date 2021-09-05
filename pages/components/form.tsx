import React, { FunctionComponent } from 'react'
import { useFormik } from 'formik'

interface FormValues {
    gender: string,
    age: string,
    job: string,
    timeline: Date,
    detail: string
}

const Form: FunctionComponent<FormValues> = (props): JSX.Element => {

    const formik = useFormik({
        initialValues: {},
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values)
            
        }
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
        >
            <div className="card card-body mb-3 text-light" style={{ backgroundColor: '#34577e' }}>
                <h4 className="mb-3">ข้อมูลผู้ป่วย &rarr;</h4>
                <div className="form-group">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">เพศ</label>
                            <select
                                className="custom-select d-block w-100"
                                onChange={formik.handleChange}
                                name="gender"
                            >
                                <option value="ชาย">ชาย</option>
                                <option value="หญิง">หญิง</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">อายุ</label>
                            <input
                                type="text"
                                className="form-control"
                                name="age"
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">อาชีพ</label>
                            <input
                                type="text"
                                className="form-control"
                                name="job"
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-body text-light" style={{ backgroundColor: '#34577e' }}>
                <h4 className="mb-3">ข้อมูลไทม์ไลน์ &rarr;</h4>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">วันเวลา</label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            name="timeline"
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">รายละเอียด</label>
                        <textarea
                            className="form-control"
                            rows={5}
                            name="detail"
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="btn btn-warning btn-block"
                            value="เพิ่มข้อมูล"
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form;