'use client'
import QRcode from 'qrcode';
import { useEffect, useState } from 'react';

const GenerateQrCode = ({ originalUrl }) => {
    const [code, setcode] = useState('')
    useEffect(() => {
        async function fetchData() {
            try {
                const qr = await QRcode.toDataURL(originalUrl, {
                    width: 180,
                    margin: 0,
                    color: {
                        light: '#0d0d0f',
                        dark: '#e0e0eb',
                    }
                }
                )
                setcode(qr);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [originalUrl])
    return (
        code && <img className='w-fit h-fit object-contain' src={code} alt="QrCode" />
    )
}

export default GenerateQrCode