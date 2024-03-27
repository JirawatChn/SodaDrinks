import { Link } from "react-router-dom"
export const Total = ({ amount, name, address }) => {
    return (
        <div>
            <div className="card shadow mb-3">
                <div className="card-header py-3 d-flex justify-content-between align-items-center "
                    style={{ height: '100px' }}>
                    <div>
                        <h6 className="m-0 font-weight-bold" style={{ color: 'black' }}>จำนวนรายการทั้งหมด {amount} รายการ</h6>
                    </div>
                   
                    <Link to={address}>
                        <div className="btn btn-primary"
                            style={{ borderRadius: '60px', height: '43px', width: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <span className="text" style={{ margin: 'auto' }}>{name}</span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}
