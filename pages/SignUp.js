import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SignUp() {
    const [values, setValues] = useState({});
    async function handleSubmit(event) {
        event.preventDefault();
        const res = await fetch('/api/signUp');
        const data = await res.json();
        console.log(data)
        //console.log(values)
    }
    function handleChange(event) {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value}));
    }
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:  
                        <input type="text" name="firstName" value={values.firstName} onChange={handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:   
                        <input type="text" name="lastName" value={values.lastName} onChange={handleChange} required/>
                    </label>                    
                </div>
                <div>
                    <label>
                        Email:         
                        <input type="email" name="email" value={values.email} onChange={handleChange} required/>
                    </label>               
                </div>
                <div>
                    <label>
                        Password:  
                        <input type="password" name="password" value={values.password} onChange={handleChange} required/>
                    </label>
                </div>
                <div>
                    {/*<input type="submit" value="Submit"/>*/}
                    <Link href="/signUp">
                        <a>Sign Up</a>
                    </Link>
                </div>
            </form>
        </div>
    )
}

