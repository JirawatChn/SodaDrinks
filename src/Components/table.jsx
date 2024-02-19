export const Total = ({amount}) => {
    return (
        <div>
            <div className="card shadow mb-3">
                <div className="card-header py-3 d-flex justify-content-between align-items-center "
                    style={{ height: '100px' }}>
                    <div>
                        <h6 className="m-0 font-weight-bold" style={{ color: 'black' }}>จำนวนรายการทั้งหมด {amount} รายการ</h6>
                    </div>
                    <form className="form-inline" style={{ paddingRight: '700px' }}>
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0 small"
                                placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        </div>
                    </form>
                    <div>
                        <a className="btn btn-primary"
                            style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <span className="text" style={{ margin: 'auto' }}>เบิก</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}
