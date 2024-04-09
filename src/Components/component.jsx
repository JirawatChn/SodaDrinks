import { Link } from "react-router-dom"

export const Edit = ({address}) => {
    return (
        <Link to={address} style={{ color: '#858796', marginLeft: '10px' }}>
            <i className="bi bi-pencil-square" style={{ marginRight: '10px' }}></i>แก้ไขข้อมูล
        </Link>
    )
} 