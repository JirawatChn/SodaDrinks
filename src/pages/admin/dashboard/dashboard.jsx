import { Body } from "../../../Components/Body"
import { Footer } from "../../../Components/Footer"
import { Head } from "../../../Components/Head"
import { Layout } from "../../../Components/Layout"
import { Nav } from "../../../Components/Nav"

export const Dashboard = () => {
    const DashboardBox = () => {
        return (
            <div>

                <div className="row">
                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <img src="./img/Group 16.png" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{ color: '#63468E' }}>
                                            ยอดสินค้าเข้าวันนี้ (ชิ้น)
                                            <div className="h5 mb-0 font-weight-bold font-size 20" style={{ textAlign: 'right', color: '#63468E' }}>
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <img src="./img/Group 16.png" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{ color: '#63468E' }}>
                                            ยอดเบิกวันนี้ (ชิ้น)
                                            <div className="h5 mb-0 font-weight-bold font-size 20" style={{ textAlign: 'right', color: '#63468E' }}>
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <img src="./img/Group 16.png" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{ color: '#63468E' }}>
                                            ยอดส่งสินค้าวันนี้ (ชิ้น)
                                            <div className="h5 mb-0 font-weight-bold font-size 20" style={{ textAlign: 'right', color: '#63468E' }}>
                                                1
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <img src="./img/Group 58.png" alt="Group 58" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{ color: '#63468E' }}>
                                            สินค้ายอดนำเข้ามากสุด
                                            <div className="h5 mb-0 font-weight-bold font-size-20" style={{ textAlign: 'right', color: '#63468E' }}>
                                                ข้อมูลตัวอย่างที่ 5
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <img src="./img/Group 58.png" alt="Group 58" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-xs font-weight-bold text-uppercase mb-1" style={{ color: '#63468E' }}>
                                            สินค้าถูกเบิกออกมากสุด
                                            <div className="h5 mb-0 font-weight-bold font-size-20" style={{ textAlign: 'right', color: '#63468E' }}>
                                                ข้อมูลตัวอย่างที่ 3
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br />

                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow h-420 py-2 ">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-sm-1">
                                        <img src="./img/Group 52.png" alt="Group 52" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="h5 mb-0 font-weight-bold font-size-20" style={{ textAlign: 'left', color: '#63468E' }}>
                                            ยอดสินค้าเข้า
                                        </div>
                                    </div>
                                </div>
                                <div className="text-xs font-weight-bold text-uppercase mb-1" style={{ color: 'black' }}>
                                    <div className="mb-4">
                                        <div className="chart-area">
                                            <canvas id="myAreaChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow h-420 py-2 ">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col-sm-1">
                                        <img src="./img/Group 58.png" alt="Group 58" />
                                    </div>
                                    <div className="col-auto">
                                        <div className="h5 mb-0 font-weight-bold font-size-20" style={{ textAlign: 'left', color: '#63468E' }}>
                                            ยอดสินค้าออก
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <div className="chart-bar">
                                        <canvas id="myBarChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div id="wrapper">
            <Nav actived='dashboard' iconActive={{ opacity: '100%' }} />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Head topbar='Dashboard / ภาพรวม' />
                    <Body heading='ภาพรวม' table={<DashboardBox />} />
                    <Footer />
                </div>
            </div>
        </div>
        // <Layout actived='dashboard' iconActive={{ opacity: '100%' }} topbar='Dashboard / ภาพรวม' heading='ภาพรวม' setToken={setToken}/> 
    )
}