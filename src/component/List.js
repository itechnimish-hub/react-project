import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function List() {

    const [Data, setData] = useState([]);
    const [search, setSearch] = useState("");

    // Get data
    useEffect(() => {
        axios.get("http://localhost:3000/blog").then(res => {
            setData(res.data);
        });
    }, []);

    // Filter Data 
    const filteredData = Data.filter(item =>
        (item.Title ? item.Title.toLowerCase() : "").includes(search.toLowerCase()) ||
        (item.Description ? item.Description.toLowerCase() : "").includes(search.toLowerCase())
    );

    return (
        <div>
            <br /><br />

            <input
                type="text"
                placeholder="Search by title or description..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br /><br />

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item, i) =>
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{item.Title}</td>
                                <td>{item.Description}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}
