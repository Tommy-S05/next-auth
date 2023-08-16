'use client'
import {useSession} from "next-auth/react";
import {useState} from "react";

export default function Home() {
    const {data: session} = useSession();
    const [properties, setProperties] = useState();
    const fetchProperties = async() => {
        const res = await fetch('http://localhost:8000/api/properties/affordable', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.user?.token}`
            }
        }).then(res => res)
            .catch(err => console.log(err));
        const response = await res.json();
        setProperties(response.data);
    }
    // console.log(properties)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button className={'bg-blue-500 p-2 text-2xl'} onClick={fetchProperties}>Get Properties</button>
            {
                properties?.map((property, index) => (
                    <div key={index}>
                        <p>{property.name}</p>
                        <p>{property.price}</p>
                    </div>
                ))
            }
            Home Page
        </main>
    )
}
