import { useEffect, useState } from 'react'


const ShiftReportTable: React.FC = () => {
    const [data, setData] = useState<Item[]>([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5001/shift_report')
            const jsonData = await response.json()
            setData(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    interface Item {
        ArticleID: number
        lpn: string
        price: number
        carteType: string
        duration: string
    }

    return (
        <>
            <div className='card'>
                <div className='card-header card-header-stretch border-bottom border-gray-200'>
                    <div className='card-title'>
                        <h3 className='fw-bold m-0'>Transaction's details</h3>
                    </div>
                    <div className='card-toolbar m-0'>
                        <ul className='nav nav-stretch nav-line-tabs border-transparent' role='tablist'></ul>
                    </div>
                </div>
                <div className='tab-content'>
                    <div
                        id='kt_billing_months'
                        className='card-body p-0 tab-pane fade show active'
                        role='tabpanel'
                        aria-labelledby='kt_billing_months'
                    >
                        <div className='table-responsive'>
                            <table className='table table-row-bordered align-middle gy-4 gs-9'>
                                <thead className='border-bottom border-gray-200 fs-6 fw-bold bg-light bg-opacity-75'>
                                    <tr>
                                        <td className=' min-w-150px'>Article ID</td>
                                        <td className=' min-w-150px'>LPN</td>
                                        <td className=' min-w-150px'>Price</td>
                                        <td className=' min-w-150px'>Carte Type</td>
                                        <td className=' min-w-100px'>Duration</td>
                                    </tr>
                                </thead>
                                <tbody className='fw-semibold text-gray-600'>
                                    {data.map((item) => (
                                        <tr key={item.ArticleID}>
                                            <td>{item.ArticleID}</td>
                                            <td>{item.lpn}</td>
                                            <td style={{ color: '#50CD89' }}>${item.price}</td>
                                            <td>{item.carteType}</td>
                                            <td>{item.duration}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShiftReportTable