import React from "react";


export const Card = (props) => <div className="card">
    {/* componente que recibe props para visualizar los datos */}
    <div className="d-flex">

        <img src="https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0" alt={props.name} />
        <div>
            <p>name: {props.name}</p>
            <p>phone: {props.phone}</p>
            <p>address: {props.address}</p>
            <p>email: {props.email}</p>
        </div>
    </div>
</div>