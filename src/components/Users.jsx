import { useState, useEffect } from "react"

function Users(){
    const [users, setUsers] = useState({ results: [] })

    useEffect(()=>{
        fetch('https://api.randomuser.me/?results=10')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>picture</th>
                    </tr>
                </thead>
                <tbody>
                    {users.results.map(user => {
                        return(
                            <tr>
                                <td>{user.name.title} {user.name.first} {user.name.last}</td>
                                <td><img src={user.picture.thumbnail} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Users